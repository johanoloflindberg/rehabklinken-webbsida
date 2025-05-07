
export interface EmailData {
  namn: string;
  telefon: string;
  epost: string;
  soker: string;
  besvarstid: string;
  meddelande: string; // This is required in our implementations
  recipient: string;
  subject: string;
  replyTo: string;
  fromName: string;
  fromEmail?: string; // Add optional field for explicit sender email
}

export interface SMTPSettings {
  primary: {
    username: string;
    password: string;
    server: string;
    port: number;
    encryption: string;
    protocol: string;
  };
  fallback?: {
    username: string;
    password: string;
    server: string;
    port: number;
    encryption: string;
    protocol: string;
  };
  on_failure?: {
    action: string;
    log_event: boolean;
  };
}
