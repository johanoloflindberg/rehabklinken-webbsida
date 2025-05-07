
import { EmailData } from "@/types/email";
import { supabase } from "@/App";

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
          email: "skicka@skicka.rekg.se" // Use the consistent sender email
        },
        replyTo: data.replyTo
      }
    });
    
    if (error) {
      console.error("Supabase Edge Function error:", error);
      throw new Error(`E-post kunde inte skickas: ${error.message}`);
    }
    
    // Check for specific errors returned by the edge function
    if (responseData?.error) {
      console.error("Email sending error:", responseData);
      
      if (responseData.error === "free_tier_limitation") {
        throw new Error("E-postmeddelandet kunde inte skickas på grund av begränsningar i Resend. Vänligen kontakta administratören för att verifiera din domän eller uppgradera Resend-kontot.");
      }
      
      if (responseData.error === "domain_not_verified") {
        throw new Error("E-postdomänen är inte verifierad. Vänligen kontakta administratören för att verifiera domänen på Resend.");
      }
      
      throw new Error(responseData.message || "Ett fel uppstod när e-postmeddelandet skulle skickas.");
    }
    
    // Verify we have a successful response from Resend
    if (!responseData?.id) {
      console.error("No email ID returned from Resend:", responseData);
      throw new Error("E-postleveransen kunde inte bekräftas.");
    }
    
    console.log("E-post skickad via Resend:", responseData);
    return Promise.resolve();
  } catch (error) {
    console.error("Fel vid skickning av e-post:", error);
    return Promise.reject(error);
  }
};
