
import { EmailData } from "@/types/email";

/**
 * Sends an email using Resend API through Edge Functions
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

    // Prepare the payload for the Resend API
    const payload = {
      from: `${data.fromName} <skicka@skicka.rekg.se>`,
      to: [data.recipient],
      subject: data.subject,
      html: emailHtml,
      reply_to: data.epost
    };

    console.log("Calling Resend API with payload:", payload);

    // Send the email using fetch to the Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    console.log("Resend API response:", responseData);

    if (!response.ok) {
      throw new Error(`Failed to send email: ${responseData.message || response.statusText}`);
    }

    console.log("Email sent successfully to:", data.recipient);
    return Promise.resolve();
  } catch (error) {
    console.error("Error sending email:", error);
    return Promise.reject(new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`));
  }
};
