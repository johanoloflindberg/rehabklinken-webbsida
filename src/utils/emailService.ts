
import { EmailData, SMTPSettings } from "@/types/email";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client - will use environment variables from Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Sends an email using Supabase Edge Functions
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // SMTP-inställningar for e-postsändning via Edge Function
    const smtpSettings: SMTPSettings = {
      primary: {
        username: "notiser@r6.se",
        // Note: Password will be stored as a secret in Supabase
        password: "password_from_supabase_secret",
        server: "server10.serverdrift.com",
        port: 465,
        encryption: "ssl",
        protocol: "smtp"
      },
      fallback: {
        username: "notiser@automationer.se",
        // Note: Password will be stored as a secret in Supabase
        password: "password_from_supabase_secret",
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

    console.log("Skickar email via Supabase Edge Function:", data);
    
    // Development mode simulation
    if (!supabaseUrl || !supabaseAnonKey) {
      console.log("Supabase not configured, simulating email send");
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("E-post simulerad som skickad till:", data.recipient);
      return Promise.resolve();
    }

    // Call the Supabase Edge Function with properly structured data
    const { data: responseData, error } = await supabase.functions.invoke('send-email', {
      body: {
        to: data.recipient,
        subject: data.subject,
        html: emailBody,
        from: {
          name: data.fromName,
          email: smtpSettings.primary.username
        },
        replyTo: data.replyTo,
        smtpSettings: smtpSettings
      }
    });
    
    if (error) {
      console.error("Supabase Edge Function error:", error);
      throw new Error(`E-post kunde inte skickas: ${error.message}`);
    }
    
    console.log("E-post skickad via Supabase Edge Function:", responseData);
    return Promise.resolve();
  } catch (error) {
    console.error("Fel vid skickning av e-post:", error);
    return Promise.reject(error);
  }
};
