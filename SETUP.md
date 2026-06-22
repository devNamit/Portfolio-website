# Portfolio Website Setup Guide

## Overview
Your professional portfolio website is now ready! It features:
- Responsive design with a modern dark theme
- Sticky navigation with smooth scrolling
- Hero section with call-to-action buttons
- About section with core values
- Skills showcase with technology tags
- Featured projects section (WanderLust example)
- Contact form with EmailJS integration
- AI chat assistant widget
- Footer with social links

## EmailJS Setup (For Contact Form)

To enable the contact form to send emails, you need to set up EmailJS:

### Step 1: Create an EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Get Your Credentials
1. Go to your **Account Settings** in the EmailJS dashboard
2. Find and copy:
   - **Public Key** (under "Public Key")
   - **Service ID** (the email service you're using, e.g., "service_xxxxx")
   - **Template ID** (create an email template and get its ID)

### Step 3: Create an Email Template
1. In EmailJS, go to **Email Templates**
2. Create a new template with these variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email
   - `{{message}}` - User's message
   - `{{to_email}}` - Your email address (for receiving messages)

Example template:
```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

### Step 4: Add Environment Variables
1. In your Vercel project settings (or local `.env.local`), add:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. Replace the placeholders with your actual EmailJS credentials

### Step 5: Update Contact Email
In `/components/contact-form.tsx`, update this line with your email:
```typescript
to_email: 'your-email@example.com',
```

## Customizing Your Portfolio

### Update Profile Information
- **Name/Title**: Edit `/app/page.tsx` hero section
- **About section**: Update the about text in `/app/page.tsx`
- **Skills**: Add/remove skills in the skills array in `/app/page.tsx`
- **Social links**: Update GitHub, LinkedIn, and email links in the footer

### Update WanderLust Project
In `/app/page.tsx`, find the projects section and update:
- GitHub link
- Live demo URL
- Project description

### Add More Projects
Duplicate the WanderLust project card section in `/app/page.tsx` to showcase additional projects

## Chat Assistant
The chat assistant uses keyword matching to provide responses. To customize responses:
1. Open `/components/chat-assistant.tsx`
2. Edit the `FAQ_RESPONSES` object to add/modify responses
3. The assistant will match user input against the keywords

## Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your repository
4. Add the EmailJS environment variables in project settings
5. Deploy!

### Add Your Domain
1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Update DNS records as needed

## Mobile Responsiveness
The portfolio is fully responsive and works great on:
- Desktop (1920px and above)
- Tablet (768px to 1024px)
- Mobile (up to 768px)

## Performance Tips
- The site is built with Next.js 16 and uses modern optimization techniques
- Images and assets are optimized automatically
- Turbopack provides fast builds and development experience

## Support
For issues with:
- **EmailJS**: Check [emailjs.com docs](https://www.emailjs.com/docs/)
- **Next.js**: Visit [nextjs.org](https://nextjs.org/)
- **Tailwind CSS**: See [tailwindcss.com](https://tailwindcss.com/)

Happy coding!
