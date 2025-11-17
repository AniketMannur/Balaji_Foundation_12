# Shree Balaji Foundation Website

## Project Overview
This is the official website for Shree Balaji Foundation, a registered non-profit organization (12A, 80G, CSR-1, Niti Aayog) focused on health, education, skill development, women empowerment, community development, and social development.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod

## Recent Changes (November 17, 2025)
- Added scroll-to-top button across all pages
- Updated Footer links to scroll to top of respective pages when clicked
- Added clickable links:
  - Mobile numbers: Open dialer with tel: links
  - Email addresses: Open email client with mailto: links
  - Location: Opens Google Maps for Pune, Maharashtra
- Updated navigation tagline to "सर्वे भवन्तु सुखिनः | सर्वे संतु निरामयाः"
- Implemented contact form email functionality using Web3Forms API

## Contact Form Integration

### Email Service: Web3Forms
The contact form uses **Web3Forms** (https://web3forms.com) to send emails without a backend server.

**Setup Required:**
1. Visit https://web3forms.com and create a free account
2. Generate an access key for your email address
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `client/src/pages/contact.tsx` (line 109) with your actual access key
4. Configure the email address where you want to receive contact form submissions

**Features:**
- Free tier: 250 submissions/month
- Privacy-focused (no data storage)
- Built-in spam protection
- GDPR compliant
- No backend required

**Important Note:** 
The user declined to use Replit's email integration (Resend). This note is here to remind future sessions that Web3Forms was chosen as the solution and the access key needs to be configured by the user.

## Project Structure
- `/client` - Frontend React application
- `/client/src/components` - Reusable UI components
- `/client/src/pages` - Page components
- `/attached_assets` - Images and media files

## Running the Project
```bash
npm run dev
```
Server runs on port 5000 (configured for Replit environment).

## Key Pages
- Home: Landing page with hero carousel
- About Us: Organization story and values
- Programs: Overview of all programs
- Impact: Statistics and impact metrics
- Gallery: Photo gallery of activities
- Contact: Contact form and information
- Feedback: User feedback form
- Campaigns: Individual campaign pages (Medical Camp, Road Safety, Blood Donation, Cancer Initiative)
- Sectors: Sector-specific pages (Education, Health, Women Empowerment, etc.)

## Environment Configuration
- Frontend binds to 0.0.0.0:5000
- Vite configured with proper host settings for Replit proxy
