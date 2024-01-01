import { ContactMeEmailTemplate } from '../../common/email/contact-me';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullname, message, email, subject } = await request.json() as any; 
  try {
    const data = await resend.emails.send({
      from: `${process.env.ADMIN_RECIPIENT_EMAIL}`,
      to: [`${process.env.ADMIN_MAILTO_EMAIL}`],
      subject: subject,
      react: ContactMeEmailTemplate({ fullName:fullname , email, message }),
      text: ''
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}