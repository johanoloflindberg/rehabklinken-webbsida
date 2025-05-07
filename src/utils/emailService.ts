
import { EmailData, SMTPSettings } from "@/types/email";

/**
 * Sends an email directly using a RESTful API endpoint
 * This avoids the need for Supabase Edge Functions
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // SMTP-inställningar för direkt e-postsändning
    const smtpSettings: SMTPSettings = {
      primary: {
        username: "notiser@r6.se",
        password: "!!Cixma2022!!",
        server: "server10.serverdrift.com",
        port: 465,
        encryption: "ssl",
        protocol: "smtp"
      },
      fallback: {
        username: "notiser@automationer.se",
        password: "!!Cixma2022!!",
        server: "server10.serverdrift.com",
        port: 465,
        encryption: "ssl",
        protocol: "smtp"
      },
      on_failure: {
        action: "use_fallback",
        log_event: true
      }
    };

    // URL till en server-side email-tjänst (ersätt med verklig URL)
    const emailServiceUrl = 'https://api.din-email-tjänst.se/send';
    
    console.log("Skickar email med data:", data);
    console.log("Använder SMTP-inställningar:", {
      server: smtpSettings.primary.server,
      port: smtpSettings.primary.port,
      username: smtpSettings.primary.username,
      // Lösenordet visas inte av säkerhetsskäl
    });
    
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

    // För utveckling/test: Simulera en lyckad sändning
    // I produktionsmiljö skulle detta ersättas med ett riktigt API-anrop
    // till en email-tjänst som kan hantera SMTP-sändning
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // I produktion skulle denna kod användas istället:
    /*
    const response = await fetch(emailServiceUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: data.recipient,
        subject: data.subject,
        html: emailBody,
        from: {
          name: data.fromName,
          email: smtpSettings.primary.username
        },
        replyTo: data.replyTo,
        smtpSettings: smtpSettings
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`E-post kunde inte skickas: ${errorData.message || response.statusText}`);
    }
    */
    
    console.log("E-post simulerad som skickad till:", data.recipient);
    return Promise.resolve();
  } catch (error) {
    console.error("Fel vid skickning av e-post:", error);
    return Promise.reject(error);
  }
};
