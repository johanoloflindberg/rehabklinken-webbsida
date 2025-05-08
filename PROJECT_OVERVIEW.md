
# Rehabkliniken Web Application

## Project Overview

This document provides a comprehensive overview of the Rehabkliniken web application's architecture, structure, and technical implementation. It serves as both technical documentation and onboarding material for developers.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Core Technologies](#core-technologies)
3. [Frontend Architecture](#frontend-architecture)
4. [Backend Architecture](#backend-architecture)
5. [Integration Services](#integration-services)
6. [Authentication & Authorization](#authentication--authorization)
7. [State Management](#state-management)
8. [Email System](#email-system)
9. [Build & Deployment](#build--deployment)
10. [Security Considerations](#security-considerations)
11. [Environment Variables](#environment-variables)
12. [Developer Guidelines](#developer-guidelines)

## Project Structure

### Directory Tree Overview

```
rehabkliniken/
├── public/                  # Static assets
│   ├── lovable-uploads/     # Uploaded images
│   ├── favicon.ico          # Favicon
│   └── og-image.png         # Open Graph default image
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── booking/         # Booking-related components
│   │   ├── common/          # Shared components like banners, cards
│   │   └── ui/              # shadcn/ui components
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── use-mobile.tsx   # Mobile detection hook
│   │
│   ├── integrations/        # External service integrations
│   │   └── supabase/        # Supabase client and types
│   │
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts         # General utility functions
│   │
│   ├── pages/               # Page components, one per route
│   │   ├── Index.tsx        # Homepage
│   │   ├── Behandlingar.tsx # Treatments page
│   │   ├── Fysioterapi.tsx  # Physical therapy page
│   │   └── ...              # Other page components
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── email.ts         # Email-related types
│   │
│   ├── utils/               # Utility functions
│   │   └── emailService.ts  # Email service utilities
│   │
│   ├── App.tsx              # Main application component with routing
│   └── main.tsx             # Application entry point
│
├── supabase/                # Supabase configuration and functions
│   ├── functions/           # Supabase Edge Functions
│   │   ├── send-contact-notification/
│   │   ├── send-email-resend/
│   │   ├── send-eva-message-resend/
│   │   ├── send-linda-message-resend/
│   │   └── send-petra-message-resend/
│   │
│   └── config.toml          # Supabase project configuration
│
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── package.json             # Project dependencies and scripts
```

### Key Folders and Their Roles

#### `/src/components`

Contains reusable UI components organized by functionality:
- `booking/`: Components related to appointment booking functionality
- `common/`: Shared components like page banners, navigation, footers
- `ui/`: shadcn/ui component library implementations

#### `/src/hooks`

Custom React hooks:
- `use-mobile.tsx`: Hook for responsive design and device detection
- `use-toast.ts`: Hook for displaying toast notifications

#### `/src/integrations`

Integration with external services:
- `supabase/`: Supabase client configuration and generated types

#### `/src/lib`

Utility libraries and helper functions:
- `utils.ts`: General utility functions used across the application

#### `/src/pages`

Each file represents a page in the application, corresponding to a route.

#### `/src/types`

TypeScript type definitions:
- `email.ts`: Types for email data structures

#### `/src/utils`

Utility functions:
- `emailService.ts`: Functions for sending emails via Supabase Edge Functions

#### `/supabase`

Supabase-specific configuration:
- `functions/`: Edge Functions for server-side operations
- `config.toml`: Supabase project configuration

## Core Technologies

### Frontend

- **React 18**: Core UI library
- **TypeScript**: Static typing for improved code quality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library based on Radix UI
- **React Router**: Client-side routing
- **TanStack Query (React Query)**: Data fetching and state management
- **Lucide React**: Icon library
- **Recharts**: Data visualization library

### Backend

- **Supabase**: Backend-as-a-Service platform
  - Edge Functions: Serverless functions for backend operations
  - Storage: File storage system

### Build Tools

- **Vite**: Fast, modern frontend build tool
- **PostCSS**: CSS transformation tool used with Tailwind
- **ESLint**: Code linting
- **SWC**: Fast JavaScript/TypeScript compiler used with Vite

## Frontend Architecture

### Component Structure

The application follows a component-based architecture with:

1. **Page Components**: Top-level components that correspond to routes
2. **Layout Components**: Structural components like navigation and footer
3. **UI Components**: Reusable shadcn/ui components with consistent styling
4. **Feature Components**: Domain-specific components for features like booking

### Routing

Client-side routing is implemented using React Router v6. The main routing configuration is defined in `App.tsx`:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/behandlingar" element={<Behandlingar />} />
    <Route path="/fysioterapi" element={<Fysioterapi />} />
    <Route path="/kostnad" element={<Kostnad />} />
    <Route path="/vanliga-fragor" element={<VanligaFragor />} />
    <Route path="/om-oss" element={<OmOss />} />
    <Route path="/kontakt" element={<Kontakt />} />
    <Route path="/eva-helde" element={<EvaHelde />} />
    <Route path="/petra-nasselqvist" element={<PetraNasselqvist />} />
    <Route path="/linda-engh-eriksson" element={<LindaEnghEriksson />} />
    <Route path="/personuppgiftspolicy" element={<Personuppgiftspolicy />} />
  </Routes>
</BrowserRouter>
```

### SEO Optimization

The application implements SEO optimization through:
- Custom `<title>` and meta tags for each page
- Open Graph tags for social media sharing
- Structured data with schema.org markup
- Server-side rendering for improved indexing

## Backend Architecture

### Supabase Integration

The application uses Supabase as its backend service, configured in `src/integrations/supabase/client.ts`:

```typescript
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
```

### Edge Functions

Serverless functions handle server-side operations:

1. **Email Functions**:
   - `send-contact-notification`: Processes general contact form submissions
   - `send-eva-message-resend`: Handles messages to Eva Helde
   - `send-linda-message-resend`: Handles messages to Linda Engh Eriksson
   - `send-petra-message-resend`: Handles messages to Petra Nässelqvist

### API Services

The application communicates with backend services through:

1. **Supabase Client API**: For direct database operations
2. **Edge Function Invocation**: For server-side processing

## Integration Services

### Email Service (Resend)

The application uses Resend for email delivery, integrated through Edge Functions:

```typescript
// Example from supabase/functions/send-contact-notification/index.ts
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Email sending implementation
const emailResponse = await resend.emails.send({
  from: `${from.name} <skicka@skicka.rekg.se>`,
  to: [to],
  subject: subject,
  html: html,
  text: text,
  reply_to: replyTo
});
```

Email functionality is abstracted through the `emailService.ts` utility, which handles:
- Formatting email content
- Error handling
- Invoking the appropriate Edge Function

## Authentication & Authorization

The application currently does not implement user authentication. All content is publicly accessible.

## State Management

### Local Component State

Component-level state is managed using React's built-in useState and useReducer hooks.

### Global State

TanStack Query (React Query) is used for server state management:

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});
```

## Email System

### Email Data Structure

Defined in `src/types/email.ts`:

```typescript
export interface EmailData {
  namn: string;
  telefon: string;
  epost: string;
  soker: string;
  besvarstid: string;
  meddelande: string;
  recipient: string;
  subject: string;
  replyTo: string;
  fromName: string;
  fromEmail?: string;
  text?: string;
}
```

### Email Flow

1. User submits a form
2. Frontend formats the data using `emailService.ts`
3. Data is sent to an Edge Function
4. The Edge Function uses Resend API to deliver the email
5. Success/error is returned to the frontend

### Email Templates

Emails are formatted as both HTML and plain text to ensure accessibility:

```typescript
// HTML version
const emailHtml = `
  <h2>Nytt meddelande från ${data.namn}</h2>
  <p><strong>Namn:</strong> ${data.namn}</p>
  ...
`;

// Plain text version
const emailText = `
  Nytt meddelande från ${data.namn}
  
  Namn: ${data.namn}
  ...
`;
```

## Build & Deployment

### Build Process

The application uses Vite for building:

```json
// From package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Deployment

The application is deployed using Lovable's built-in deployment system, which:
1. Builds the React application
2. Deploys the static assets
3. Deploys the Supabase Edge Functions

### Hosting

The application is hosted on Lovable's infrastructure at `https://rehabkliniken.lovable.app`.

## Security Considerations

### CORS Configuration

Edge Functions implement CORS headers to control access:

```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```

### API Key Protection

Sensitive API keys like the Resend API key are stored as Supabase secrets, not exposed to the client:

```typescript
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
```

### Input Validation

Forms implement client-side validation for user inputs before submission.

## Environment Variables

### Supabase Configuration

The application uses these environment variables for Supabase configuration:

- `SUPABASE_URL`: URL of the Supabase project
- `SUPABASE_PUBLISHABLE_KEY`: Public key for client-side access
- `SUPABASE_SERVICE_ROLE_KEY`: Admin key used in Edge Functions

### Email Service Configuration

- `RESEND_API_KEY`: API key for the Resend email service

## Developer Guidelines

### Code Organization

- Keep components small and focused
- Use TypeScript interfaces for prop definitions
- Organize imports with React imports first, followed by third-party libraries

### Styling Approach

- Use Tailwind utility classes for styling
- Follow the project's color scheme for consistency
- Use shadcn/ui components for consistent UI elements

### Best Practices

1. **Performance**:
   - Minimize re-renders by using React.memo where appropriate
   - Use React.lazy for code splitting larger components

2. **Accessibility**:
   - Ensure proper ARIA attributes on interactive elements
   - Provide both HTML and plain text formats for emails
   - Maintain sufficient color contrast for text

3. **SEO**:
   - Use semantic HTML elements
   - Implement proper meta tags for each page
   - Include structured data where relevant

---

This documentation was generated on: May 8, 2025
