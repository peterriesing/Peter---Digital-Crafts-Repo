import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
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
        theme="dark"
      />
      <div className="container">
        <form className="form">
          <h1 className="contact">Contact form</h1>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Your Name</h3>
            </div>
            <div className="inputFields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Your Email</h3>
            </div>
            <div className="inputFields">
              <input type="text" placeholder="e.g. hello@contact.net" />
            </div>
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Phone*</h3>
            </div>
            <input type="text" placeholder="###" />
            <input type="text" placeholder="###" />
            <input type="text" placeholder="####" />
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Message Subject*</h3>
            </div>
            <select>
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
            <input className="textarea" type="textarea" />
          </div>
          <div className="inputDiv">
            <div className="inputTitle">
              <h3>Verification*</h3>
            </div>
            <div className="captcha">
              <div className="checkDiv">
                <input type="checkbox" />
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
          <button>SUBMIT FORM</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
