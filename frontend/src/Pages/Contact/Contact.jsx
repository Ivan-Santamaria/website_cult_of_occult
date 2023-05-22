import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { BiMailSend } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const schema = yup
    .object({
      name: yup.string().max(50).required("Name (Required)"),
      email: yup
        .string()
        .email("Email ")
        .max(255)
        .required("Your Email is not valid (Required)"),
      message: yup.string().required("Your message is empty"),
    })
    .required();

  const [captchaIsDone, setCaptchaDone] = useState(false);
  function onChange() {
    setCaptchaDone(true);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    const templateId = process.env.REACT_APP_EMAIL_TEMPLATES;
    const serviceId = process.env.REACT_APP_EMAIL_SERVICES;
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      // reply_to: r.target.reset(),
    });
  };
  const sendFeedback = (serviceId, templateId, variables) => {
    if (captchaIsDone === true) {
      emailjs
        .send(serviceId, templateId, variables, process.env.REACT_APP_EMAIL_KEY)
        .then((res) => {
          // Faire un rerender sur le bouton
          alert("Email sent! ");
        });
    } else {
      // Faire un rerender sur le bouton
      alert("Error, you must do the reCAPTCHA.");
    }
  };

  return (
    <main className="body contact-body">
      <h1 className="h1-contact">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <label htmlFor="name" className="label-contact">
            Name:
          </label>
          <input
            className="input-contact"
            type="text"
            name="name"
            placeholder="Name (Required)"
            {...register("name")}
          />
          {errors.name && <p className="c-yup">{errors.name.message}</p>}
          <label htmlFor="email" className="label-contact">
            Email :
          </label>
          <input
            className="input-contact"
            type="email"
            name="email"
            placeholder="exemple@mail.com (Required)"
            {...register("email")}
          />
          {errors.email && <p className="c-yup">{errors.email.message}</p>}
          <label htmlFor="subject" className="label-contact">
            Subject:
          </label>
          <select
            className="select-contact"
            name="Subject"
            defaultValue="choice"
            selected
            {...register("subject")}
          >
            <option value="choice" disabled>
              Please choose an option
            </option>
            <option value="Booking">Booking</option>
            <option value="Event">Event</option>
            <option value="Partnership">Partnership</option>
            <option value="Order">Order</option>
            <option value="Other">Other</option>
          </select>
          <label htmlFor="message" className="label-contact">
            Message :
          </label>
          <textarea
            className="message-contact"
            type="message"
            placeholder="Your message (Required)"
            cols="20"
            rows="10"
            name="message"
            {...register("message")}
          ></textarea>
          {errors.message && <p className="c-yup">{errors.message.message}</p>}
          <ReCAPTCHA
            theme="dark"
            sitekey={process.env.REACT_APP_CAPTCHA_KEYV2}
            onChange={onChange}
          />
          ,
          <button className="button-contact" type="Submit" value="Submit">
            Submit
            <BiMailSend className="mail-logo" />
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
