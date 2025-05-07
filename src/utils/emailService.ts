
import { EmailData } from "@/types/email";
import { supabase } from "@/App";

/**
 * Sends an email using Resend via Supabase Edge Functions
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("Sending email via Supabase Edge Function with Resend:", data);
    
    // Development mode simulation
    if (!supabase) {
      console.log("Supabase not configured, simulating email send");
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Email simulated as sent to:", data.recipient);
      return Promise.resolve();
    }

    // Format email data for recipient with simple HTML formatting
    const emailBody = `
      <h2>New message from ${data.namn}</h2>
      <p><strong>Name:</strong> ${data.namn}</p>
      <p><strong>Phone:</strong> ${data.telefon}</p>
      <p><strong>Email:</strong> ${data.epost}</p>
      <p><strong>What is the patient seeking help for?</strong><br>${data.soker}</p>
      <p><strong>How long has the patient had these issues?</strong><br>${data.besvarstid}</p>
      <p><strong>Additional message:</strong><br>${data.meddelande || "–"}</p>
      <hr>
      <p><i>This message was sent via the website form. Please reply directly to the sender's email.</i></p>
    `;

    // Call the Supabase Edge Function using Resend
    const { data: responseData, error } = await supabase.functions.invoke('send-email-resend', {
      body: {
        to: data.recipient,
        subject: data.subject,
        html: emailBody,
        from: {
          name: data.fromName,
          email: "skicka@skicka.rekg.se" // Use the consistent sender email
        },
        replyTo: data.epost // Set reply-to as the form submitter's email
      }
    });
    
    if (error) {
      console.error("Supabase Edge Function error:", error);
      throw new Error(`Email could not be sent: ${error.message}`);
    }
    
    // Check for specific errors returned by the edge function
    if (responseData?.error) {
      console.error("Email sending error:", responseData);
      
      if (responseData.error === "free_tier_limitation") {
        throw new Error("The email could not be sent due to Resend limitations. Please contact the administrator to verify your domain or upgrade your Resend account.");
      }
      
      if (responseData.error === "domain_not_verified") {
        throw new Error("The email domain is not verified. Please contact the administrator to verify the domain on Resend.");
      }
      
      throw new Error(responseData.message || "An error occurred while sending the email.");
    }
    
    // Verify we have a successful response from Resend
    if (!responseData?.id) {
      console.error("No email ID returned from Resend:", responseData);
      throw new Error("Email delivery could not be confirmed.");
    }
    
    console.log("Email sent via Resend:", responseData);
    return Promise.resolve();
  } catch (error) {
    console.error("Error sending email:", error);
    return Promise.reject(error);
  }
};
