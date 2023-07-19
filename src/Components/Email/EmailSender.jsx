// EmailSender.js
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./EmailSender.scss";

const EmailSender = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("to", data.to);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("attachment", data.attachment[0]);

      await axios.post("/api/send-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Optional: Clear form fields after successful submission
      setValue("to", "");
      setValue("subject", "");
      setValue("message", "");
      setValue("attachment", "");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="email-sender">
      <div className="container">
        <h1>Email Sender</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="to">To:</label>
          <input type="email" id="to" {...register("to", { required: true })} />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: true })}
          />

          <label htmlFor="message">Message:</label>
          <textarea id="message" {...register("message", { required: true })} />

          <label htmlFor="attachment">Attachment:</label>
          <input
            type="file"
            id="attachment"
            {...register("attachment", { required: false })}
          />

          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default EmailSender;
