import React from "react";
import Footer from "../Footer";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_qq54n6u",
        e.target,
        "user_crcSLVsR3W2BhTJ0IJTYF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div>
        <div className="contact-container">
          <h1 className="title">צור קשר</h1>
          <div className="form">
            <form onSubmit={sendEmail}>
              <input
                className="form-control"
                name="name"
                type="text"
                id="name"
                aria-label="Name"
                placeholder="שם מלא *"
                required
                dir="rtl"
              />
              <input
                className="form-control"
                name="email"
                type="email"
                id="mail"
                aria-label="Email"
                placeholder="אימייל *"
                required
                dir="rtl"
              />
              <input
                className="form-control"
                type="tel"
                id="tel"
                aria-label="Phone Number"
                placeholder="מס' טלפון *"
                required
                name="phone-number"
                dir="rtl"
              />
              <textarea
                className="message form-control"
                name="message"
                id="msg"
                aria-label="Message"
                placeholder="הודעה *"
                required
                dir="rtl"
              ></textarea>
              <button type="submit" className="contact-btn  form-control">
                שלח
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
