'use server';

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const recipientEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;

    if (!serviceId || !templateId || !publicKey || !recipientEmail) {
      throw new Error('EmailJS configuration is incomplete');
    }

    // Call EmailJS API directly
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_name: 'Namit',
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          message: formData.message,
          title: formData.message.substring(0, 50),
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to send email');
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error: any) {
    console.error('[v0] Server Action Error:', error);
    return {
      success: false,
      message: error.message || 'Failed to send message. Please try again.',
    };
  }
}
