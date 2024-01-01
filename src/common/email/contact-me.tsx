interface ContactMeEmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactMeEmailTemplate: React.FC<Readonly<ContactMeEmailTemplateProps>> = ({
  fullName,
  email,
  message
}) => (
  <div>
    <h1>{fullName} wants to get in touch.</h1>
    <p>
        <label>Email:</label>
        &nbsp;
        <span>{email}</span>
    </p>
    <p>
     {message}
    </p>
  </div>
);