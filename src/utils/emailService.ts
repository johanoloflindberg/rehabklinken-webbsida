
import { EmailData } from "@/types/email";

/**
 * Simulates sending an email (Supabase/Resend integration removed)
 */
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    console.log("Email functionality disabled - Supabase integration removed");
    console.log("Would have sent email with the following data:", data);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Email simulated as sent to:", data.recipient);
    
    // Since we no longer have Supabase, just resolve the promise
    return Promise.resolve();
  } catch (error) {
    console.error("Error in email simulation:", error);
    return Promise.reject(new Error("Email service disabled - Supabase integration has been removed"));
  }
};
