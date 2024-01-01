"use client"
import { FC, ReactNode } from "react";
import { useForm, Resolver, FieldErrors, FieldError, UseFormRegister, Path } from 'react-hook-form';
import styles from './index.module.css';
import { Button } from "@/common/components/button";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactValidationResolver: Resolver<ContactForm> = (values) => {
  const errors = {} as FieldErrors<ContactForm>;
  if (
    !values.firstName
  ) {
    errors.firstName = {
      message: 'Required',
    } as FieldError;
  }

  if (
    !values.lastName
  ) {
    errors.lastName = {
      message: 'Required',
    } as FieldError;
  }

  if (
    !values.email
  ) {
    errors.email = {
      message: 'Required',
    } as FieldError;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email',
    } as FieldError;
  }

  if (
    !values.subject
  ) {
    errors.subject = {
      message: 'Required',
    } as FieldError;
  }

  if (
    !values.message
  ) {
    errors.message = {
      message: 'Required',
    } as FieldError;
  }

  return { values, errors };
}

interface ContactInputProps {
  register: UseFormRegister<ContactForm>;
  inputKey: Path<ContactForm>;
  errors: FieldErrors<ContactForm>
  label: string;
}

const ContactInput: FC<ContactInputProps> = ({
  register,
  inputKey,
  label,
  errors
}) => { 
  const hasError = errors && errors[inputKey];
  let errorMessage = hasError && (errors[inputKey]?.message as ReactNode);

  return (
    <div className={styles.input_box}>
      <label className={styles.input_label_text} htmlFor={inputKey}>{label}</label>
      <input {...register(inputKey)} className={`${styles.input} ${hasError ? styles.error_border : "" }`}/>
      <div className={styles.error_box}>
        {errorMessage && (
          <span className={styles.error_message}>{errorMessage}</span>
        )}
      </div>
    </div>
  )
}
export const Contact = () => {
  const {register, handleSubmit, reset, formState: {isValid, errors }} = useForm<ContactForm>({
    mode: "onChange",
    defaultValues: {},
    resolver: contactValidationResolver
  });

  const onSubmit = handleSubmit(async ({
    firstName,
    lastName,
    email,
    subject,
    message,
  }) => {
    await fetch(`${window.location.origin}/api`, {
      method: "post",
      body: JSON.stringify({
        email,
        subject,
        message, 
        fullname:`${firstName} ${lastName}`})
    });
    reset();
  });
  return (
    <div className={styles.container}>
      <div className={styles.name_box}> 
        <ContactInput errors={errors} register={register} inputKey="firstName" label="First Name" />
        <ContactInput errors={errors} register={register} inputKey="lastName" label="Last Name" />
      </div>
      <ContactInput errors={errors} register={register} inputKey="email" label="Email" />
      <ContactInput errors={errors} register={register} inputKey="subject" label="Subject" />
      <div className={styles.input_box}>
        <label className={styles.input_label_text} htmlFor="message">Message</label>
        <textarea {...register("message")} className={`${styles.input} ${styles.textbox} ${errors['message'] ? styles.error_border : "" }`} />
        <div className={styles.error_box}>
        {errors['message']?.message && (
          <span className={styles.error_message}>{errors['message']?.message}</span>
        )}
      </div>
      </div>
      <div>
        <Button disabled={!isValid} className={styles.button} onClick={onSubmit}>
          Send Email
        </Button>
      </div>
    </div>
  ) 
}