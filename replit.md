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

1. **Create Web3Forms Account:**
   - Visit https://web3forms.com
   - Sign up with your email address (contact@shreebalajifoundation.org.in)
   - Verify your email address

2. **Generate Access Key:**
   - Log in to your Web3Forms dashboard
   - Click "Create New Access Key"
   - Copy the generated access key

3. **Add Environment Variable in Replit:**
   - Go to Replit Secrets (in the Tools panel)
   - Add a new secret:
     - Key: `VITE_WEB3FORMS_ACCESS_KEY`
     - Value: [Paste your Web3Forms access key]
   - Save the secret

4. **Restart the Application:**
   - The contact form will now send emails to your registered email address

**Features:**
- Free tier: 250 submissions/month
- Privacy-focused (no data storage)
- Built-in spam protection
- GDPR compliant
- No backend required
- Secure: API key stored as environment variable

**How It Works:**
- User fills out the contact form
- Form data is submitted to Web3Forms API via HTTPS
- Web3Forms sends an email to your registered email address
- User receives success/error notification via toast

**Important Security Note:** 
The access key is stored as an environment variable (`VITE_WEB3FORMS_ACCESS_KEY`) and not hardcoded in the source code. This follows security best practices and prevents the API key from being exposed in the repository.

**Troubleshooting:**
- If form submissions fail, check that the `VITE_WEB3FORMS_ACCESS_KEY` environment variable is set correctly
- Verify your Web3Forms account is active and email is verified
- Check browser console for any error messages
- Note: Environment variables starting with `VITE_` are exposed to the frontend (this is safe for Web3Forms public API keys)

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
