import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured - email not sent');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendConsultationNotification(consultationData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDetails: string;
}): Promise<boolean> {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
        New Consultation Request - Blackhorse Furnitures
      </h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Client Information</h3>
        <p><strong>Name:</strong> ${consultationData.firstName} ${consultationData.lastName}</p>
        <p><strong>Email:</strong> ${consultationData.email}</p>
        <p><strong>Phone:</strong> ${consultationData.phone}</p>
      </div>
      
      <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FFD700; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Project Details</h3>
        <p style="line-height: 1.6; color: #555;">${consultationData.projectDetails}</p>
      </div>
      
      <div style="margin-top: 30px; padding: 15px; background-color: #f0f0f0; border-radius: 5px;">
        <p style="margin: 0; font-size: 14px; color: #666;">
          This consultation request was submitted through the Blackhorse Furnitures website contact form.
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: 'amarchauhan@email.com',
    from: 'noreply@blackhorsefurnitures.com',
    subject: `New Consultation Request from ${consultationData.firstName} ${consultationData.lastName}`,
    text: `New consultation request from ${consultationData.firstName} ${consultationData.lastName} (${consultationData.email}, ${consultationData.phone}). Project Details: ${consultationData.projectDetails}`,
    html: emailHtml
  });
}