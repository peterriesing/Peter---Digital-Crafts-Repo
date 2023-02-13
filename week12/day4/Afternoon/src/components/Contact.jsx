import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { useState } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    messageSubject: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState({
    robot: "yes",
  });

  const setFormState = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const checkCaptcha = (e) => {
    setCaptcha({ ...captcha, [e.target.name]: e.target.value });
  };

  const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";
  const supabaseKey = import.meta.env.VITE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const sumbitData = async (form) => {
    console.log(form);
    const { error } = await supabase.from("reactUserData2").insert(form);
    console.log(error);
  };

  const authContact = () => {
    if (contactForm?.firstName === "") {
      toast("You must enter a first name");
      return;
    }
    if (contactForm?.lastName === "") {
      toast("You must enter a last name");
      return;
    }
    if (contactForm?.email === "") {
      toast("You must enter an email address");
      return;
    }
    if (contactForm?.phone === "") {
      toast("You must enter a phone number");
      return;
    }
    if (contactForm?.messageSubject === "") {
      toast("You must choose a subject for the message");
      return;
    }
    if (contactForm?.message === "") {
      toast("You must enter a message");
      return;
    }
    if (captcha?.robot === "yes") {
      toast("Verify that you are human");
      return;
    }
    checkCaptcha(captcha);
    sumbitData(contactForm);
  };

  // set e and track phone inputs for
  const setPhoneNumber = () => {
    const PhoneNumber = phone1 + phone2 + phone3;
    setContactForm({
      ...contactForm,
      phone: PhoneNumber,
    });
    authContact();
  };
  return (
    <div className="main min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <form className="form">
          <h1 className="contact">Contact form</h1>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Your Name</h3>
            </div>
            <div className="inputFields">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={(e) => setFormState(e)}
                value={contactForm.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => setFormState(e)}
                value={contactForm.lastName}
              />
            </div>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Your Email</h3>
            </div>
            <div className="emailField">
              <input
                type="text"
                placeholder="e.g. hello@contact.net"
                name="email"
                onChange={(e) => setFormState(e)}
                value={contactForm.email}
              />
            </div>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Phone*</h3>
            </div>
            <div className="phoneField">
              <input
                type="text"
                placeholder="###"
                onChange={(e) => setPhone1(e.target.value)}
                value={phone1}
              />
              <input
                type="text"
                placeholder="###"
                onChange={(e) => setPhone2(e.target.value)}
                value={phone2}
              />
              <input
                type="text"
                placeholder="###"
                onChange={(e) => setPhone3(e.target.value)}
                value={phone3}
              />
            </div>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Message Subject*</h3>
            </div>
            <select
              className="subjectField"
              name="messageSubject"
              value={contactForm.messageSubject}
              onChange={(e) => setFormState(e)}
            >
              <option value="complaint">Complaint</option>
              <option value="something">Something</option>
              <option value="pissed">Realy Mad</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Message*</h3>
            </div>
            <input
              className="textarea"
              type="textarea"
              name="message"
              onChange={(e) => setFormState(e)}
              value={contactForm.message}
            />
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Verification*</h3>
            </div>
            <div className="captcha">
              <div className="checkDiv">
                <input
                  type="checkbox"
                  name="captcha"
                  onChange={() => setCaptcha({ robot: "no" })}
                />
                <h4>I'm not a robot</h4>
              </div>
              <img
                className="captchaLogo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/150px-RecaptchaLogo.svg.png?20180222151201g"
                alt="captcha_logo"
              />
            </div>
          </div>
        </form>
        <div className="submit">
          <button onClick={setPhoneNumber}>SUBMIT FORM</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
