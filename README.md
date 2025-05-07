
# Rehabkliniken Web Application

## Project Description

Rehabkliniken is a professional website for a rehabilitation clinic in Gävle, Sweden. The application provides visitors with information about the clinic's services, treatments, costs, frequently asked questions, and staff profiles. Users can navigate through different sections to learn about physical therapy services, treatments, pricing, and how to contact the clinic.

Key features:
- Responsive design optimized for all devices
- Detailed information about rehabilitation and physical therapy services
- Staff profiles with professional backgrounds
- Cost and payment information with healthcare system integration details
- FAQ section for common patient questions
- Contact information and location details

## Live Demo

[Visit the deployed application](https://rehabkliniken.lovable.app)

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- Lucide React for icons
- Recharts for data visualization (if needed)

### Backend
- Supabase for backend services
- Edge Functions for server-side operations

### State Management
- React Query (TanStack Query) for data fetching and state management

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rehabkliniken
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   # Add any other required environment variables
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:8080](http://localhost:8080) to see the application running.

## Folder Structure

```
rehabkliniken/
├── public/              # Static assets and HTML template
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── booking/     # Booking-related components
│   │   ├── common/      # Shared components like banners, cards
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Integration with external services (Supabase)
│   ├── lib/             # Utility functions and helpers
│   ├── pages/           # Page components, one per route
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component with routing
│   └── index.css        # Global styles and Tailwind imports
├── supabase/
│   └── functions/       # Supabase Edge Functions
├── .gitignore           # Git ignore file
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Database Setup

The project uses Supabase as its backend service. To set up the database:

1. Create a new project on [Supabase](https://supabase.com)
2. Note your project URL and anon/public key
3. Add these credentials to your `.env` file
4. The project is already configured to connect to Supabase through the client in `src/integrations/supabase/client.ts`

### Required Supabase Resources

- Edge functions for contact form submission and email notifications
- Authentication for admin access (if implemented)
- Database tables for storing any dynamic content

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-anon-key

# Email Service (if using Resend)
RESEND_API_KEY=your-resend-api-key

# Other configuration variables as needed
```

## Deployment

The application is designed to be deployed using Lovable's built-in deployment system. To deploy:

1. Open your project in [Lovable](https://lovable.dev)
2. Click on "Share" in the top navigation
3. Select "Publish" to deploy your application
4. Your application will be available at `https://your-project-name.lovable.app`

For custom domain setup, follow the instructions in the Lovable documentation.

## Contribution Guidelines

When contributing to this project, please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and commit them (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style conventions and includes appropriate tests.

## License

This project is proprietary and maintained by Rehabkliniken. All rights reserved.

## Contact/Support

For questions or support regarding this project, please contact:
- Rehabkliniken: reception@rekg.se | Tel: 026-12 76 00
- Website: [https://rehabkliniken.lovable.app](https://rehabkliniken.lovable.app)
- Developer Contact: [Your Contact Information]

---

This project was built with [Lovable](https://lovable.dev).
