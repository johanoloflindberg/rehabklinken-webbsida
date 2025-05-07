
import { EmailData } from "@/types/email";

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

    // Prepare the payload for the Edge Function
    const payload = {
      to: data.recipient,
      subject: data.subject,
      html: emailHtml,
      from: {
        name: data.fromName,
        email: "skicka@skicka.rekg.se" // Using the correct sender email
      },
      replyTo: data.epost
    };

    console.log("Calling Edge Function with payload:", payload);

    // Send the email using fetch to the Supabase Edge Function
    try {
      // Determine which edge function to call based on the recipient
      let edgeFunctionUrl;
      
      // Use the send-eva-message-resend function for Eva Helde's emails
      if (data.subject.includes("Eva Helde")) {
        edgeFunctionUrl = "https://rehabkliniken-i-gavle.functions.supabase.co/send-eva-message-resend";
      } else {
        // Default to the general email function for other recipients
        edgeFunctionUrl = "https://rehabkliniken-i-gavle.functions.supabase.co/send-email-resend";
      }
      
      const response = await fetch(edgeFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Parse the response as JSON
      const responseData = await response.json();
      console.log("Edge Function response:", responseData);

      // Check if the response was not successful
      if (!response.ok) {
        throw new Error(`Failed to send email: ${responseData.message || responseData.error || response.statusText}`);
      }

      console.log("Email sent successfully to:", data.recipient);
      return Promise.resolve();
    } catch (fetchError) {
      console.error("Fetch operation failed:", fetchError);
      throw new Error(`Network error when sending email: ${fetchError instanceof Error ? fetchError.message : 'Unknown network error'}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return Promise.reject(new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`));
  }
};
