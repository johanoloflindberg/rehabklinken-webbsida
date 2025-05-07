
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  html: string;
  from: {
    name: string;
    email: string;
  };
  replyTo: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html, from, replyTo }: EmailRequest = await req.json();

    console.log(`Sending email to ${to} with subject "${subject}"`);

    // Use skicka@skicka.rekg.se as the sender email
    const emailResponse = await resend.emails.send({
      from: `${from.name} <skicka@skicka.rekg.se>`,
      to: [to],
      subject: subject,
      html: html,
      reply_to: replyTo
    });

    // Check specifically for the free tier limitation error
    if (emailResponse.error && emailResponse.error.statusCode === 403 && emailResponse.error.message.includes("You can only send testing emails")) {
      console.log("Free tier limitation encountered:", emailResponse.error.message);
      
      return new Response(
        JSON.stringify({
          error: "free_tier_limitation",
          message: "Resend free tier can only send to your verified email. Please verify your domain or upgrade your Resend account.",
          details: emailResponse.error.message
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
