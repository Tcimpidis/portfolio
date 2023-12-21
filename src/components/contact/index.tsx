"use client"
import { FC, useState } from "react";
import { useForm, Resolver, FieldErrors, FieldError, UseFormRegister, Path } from 'react-hook-form';
import styles from './index.module.css';

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
  label: string;
}

const ContactInput: FC<ContactInputProps> = ({
  register,
  inputKey,
  label
}) => (
  <div className={styles.input_box}>
    <label className={styles.input_label_text} htmlFor={inputKey}>{label}</label>
    <input {...register(inputKey)} className={styles.input}/>
  </div>
)

export const Contact = () => {
  const {register, handleSubmit, reset, formState: {isValid}} = useForm<ContactForm>({
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
    await fetch('http://localhost:3000/api/footer', {
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
        <ContactInput register={register} inputKey="firstName" label="First Name" />
        <ContactInput register={register} inputKey="lastName" label="Last Name" />
      </div>

      <ContactInput register={register} inputKey="email" label="Email" />
      <ContactInput register={register} inputKey="subject" label="Subject" />
      <div className={styles.input_box}>
        <label className={styles.input_label_text} htmlFor="message">Message</label>
        <textarea {...register("message")} className={styles.input} />
      </div>
      <div>
        <button className={styles.button} disabled={!isValid} onClick={onSubmit}>
          Send Email
        </button>
      </div>
    </div>
  ) 
}