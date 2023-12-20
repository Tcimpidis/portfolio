interface ContactMeEmailTemplateProps {
  fullName: string;
  phoneNumber: string;
  message: string;
}

export const ContactMeEmailTemplate: React.FC<Readonly<ContactMeEmailTemplateProps>> = ({
  fullName,
  phoneNumber,
  message
}) => (
  <div>
    <h1>{fullName} wants to get in touch.</h1>
    <div>
      <label>Phone Number:</label>
      <span>{phoneNumber}</span>
    </div>
    {message}
  </div>
);