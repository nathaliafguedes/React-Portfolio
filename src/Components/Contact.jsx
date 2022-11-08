import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvpqly");
  if (state.succeeded) {
    return (
      <div className="thankyou-msg">
        <p>Thanks for contacting me. I will connect back you shortly</p>
      </div>
    );
  }
  return (
    <>
      <div className="heading" id="contact">
        <h1>Contact</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="name">
            <label htmlFor="name">Name</label> <br />
            <input id="name" type="text" name="name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address</label> <br />
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
