
import { EmailData } from "@/types/email";
import { supabase } from "@/integrations/supabase/client";

/**
 * Sends an email using Resend via Supabase Edge Functions
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("Skickar email via Supabase Edge Function med Resend:", data);
    
    // Development mode simulation
    if (!supabase) {
      console.log("Supabase not configured, simulating email send");
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("E-post simulerad som skickad till:", data.recipient);
      return Promise.resolve();
    }

    // Formatera email-data för mottagaren med en enkel HTML-formatering
    const emailBody = `
      <h2>Nytt meddelande från ${data.namn}</h2>
      <p><strong>Namn:</strong> ${data.namn}</p>
      <p><strong>Telefon:</strong> ${data.telefon}</p>
      <p><strong>E-post:</strong> ${data.epost}</p>
      <p><strong>Vad söker patienten för?</strong><br>${data.soker}</p>
      <p><strong>Hur länge har patienten haft besvären?</strong><br>${data.besvarstid}</p>
      <p><strong>Övrigt meddelande:</strong><br>${data.meddelande || "–"}</p>
      <hr>
      <p><i>Meddelandet är skickat via formulär på webbsidan. Svara gärna direkt till avsändarens e-postadress.</i></p>
    `;

    // Call the Supabase Edge Function using Resend
    const { data: responseData, error } = await supabase.functions.invoke('send-email-resend', {
      body: {
        to: data.recipient,
        subject: data.subject,
        html: emailBody,
        from: {
          name: data.fromName,
          email: "notiser@r6.se" // Using default sender from the original code
        },
        replyTo: data.replyTo
      }
    });
    
    if (error) {
      console.error("Supabase Edge Function error:", error);
      throw new Error(`E-post kunde inte skickas: ${error.message}`);
    }
    
    console.log("E-post skickad via Resend:", responseData);
    return Promise.resolve();
  } catch (error) {
    console.error("Fel vid skickning av e-post:", error);
    return Promise.reject(error);
  }
};
