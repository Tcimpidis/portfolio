import { ContactMeEmailTemplate } from '../../common/email/contact-me';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullName, phoneNumber, message, email, subject } = request.json() as any; 
  try {
    const data = await resend.emails.send({
      from: email,
      to: ['jamin@tcimpidis.com'],
      subject: subject,
      react: ContactMeEmailTemplate({ fullName, phoneNumber, message }),
      text: ''
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}