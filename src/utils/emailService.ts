
import { EmailData } from "@/types/email";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

/**
 * Sends an email using the Supabase Edge Function that forwards to Resend API
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("Sending email with data:", data);
    
    // Format the HTML content for the email
    const emailHtml = `
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

    // Format the plain text version of the email
    const emailText = `
      Nytt meddelande från ${data.namn}
      
      Namn: ${data.namn}
      Telefon: ${data.telefon}
      E-post: ${data.epost}
      
      Vad söker patienten för?
      ${data.soker}
      
      Hur länge har patienten haft besvären?
      ${data.besvarstid}
      
      Övrigt meddelande:
      ${data.meddelande || "–"}
      
      --
      Meddelandet är skickat via formulär på webbsidan. Svara gärna direkt till avsändarens e-postadress.
    `;

    // Determine form origin to log it in the function
    let formOrigin = "unknown";
    if (data.recipient === "reception@rekg.se") formOrigin = "Eva Helde page";
    else if (data.recipient === "petra@rekg.se") formOrigin = "Petra Nässelqvist page";
    else if (data.recipient === "linda@rekg.se") formOrigin = "Linda Engh Eriksson page";

    // Prepare the payload for the Edge Function
    const payload = {
      to: data.recipient,
      subject: data.subject,
      html: emailHtml,
      text: emailText, // Add the plain text version
      from: {
        name: data.fromName,
        email: "skicka@skicka.rekg.se" 
      },
      replyTo: data.epost,
      formOrigin: formOrigin
    };

    console.log("Preparing to send email payload:", payload);

    try {
      // Call the Supabase Edge Function
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-notification', {
        body: payload,
      });

      // Handle potential errors from the Edge Function
      if (error) {
        console.error("Edge function error:", error);
        throw new Error(`Edge function error: ${error.message || 'Unknown error'}`);
      }

      // Handle application-level errors returned from the Edge Function
      if (responseData && responseData.error) {
        console.error("Application error:", responseData);
        throw new Error(`Application error: ${responseData.message || responseData.error}`);
      }

      console.log("Email sent successfully:", responseData);
      return Promise.resolve();
    } catch (fetchError) {
      console.error("Email sending operation failed:", fetchError);
      throw new Error(`Network error when sending email: ${fetchError instanceof Error ? fetchError.message : 'Unknown network error'}`);
    }
  } catch (error) {
    console.error("Error in email sending process:", error);
    return Promise.reject(new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`));
  }
};
