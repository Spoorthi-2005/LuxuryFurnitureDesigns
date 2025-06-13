interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Log consultation request for amarchauhan to review
    console.log('\n=== NEW CONSULTATION REQUEST FOR AMARCHAUHAN ===');
    console.log(`To: ${params.to}`);
    console.log(`From: ${params.from}`);
    console.log(`Subject: ${params.subject}`);
    console.log(`Message: ${params.text}`);
    console.log('================================================\n');
    
    // In a production environment, this would integrate with your preferred email service
    // For now, all requests are logged for manual review
    return true;
  } catch (error) {
    console.error('Email processing error:', error);
    return false;
  }
}

export async function sendConsultationNotification(consultationData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  projectDetails: string;
}): Promise<boolean> {
  const phoneDisplay = consultationData.phone || 'Not provided';
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8B6F47; border-bottom: 2px solid #8B6F47; padding-bottom: 10px;">
        New Consultation Request - Blackhorse Furnitures
      </h2>
      
      <div style="background-color: #F5F0E8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Client Information</h3>
        <p><strong>Name:</strong> ${consultationData.firstName} ${consultationData.lastName}</p>
        <p><strong>Email:</strong> ${consultationData.email}</p>
        <p><strong>Phone:</strong> ${phoneDisplay}</p>
      </div>
      
      <div style="background-color: #fff; padding: 20px; border-left: 4px solid #8B6F47; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Project Details</h3>
        <p style="line-height: 1.6; color: #555;">${consultationData.projectDetails}</p>
      </div>
      
      <div style="margin-top: 30px; padding: 15px; background-color: #EEEBE5; border-radius: 5px;">
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
    text: `New consultation request from ${consultationData.firstName} ${consultationData.lastName} (${consultationData.email}, ${phoneDisplay}). Project Details: ${consultationData.projectDetails}`,
    html: emailHtml
  });
}