
export interface EmailData {
  namn: string;
  telefon: string;
  epost: string;
  soker: string;
  besvarstid: string;
  meddelande?: string; // This can be optional since it's not required in the form
  recipient: string;
  subject: string;
  replyTo: string;
  fromName: string;
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
