import React from "react";
import "./Contact.css";
import contactPNG from "../../assets/image/contact.jpg";
const Contact = () => {
  return (
    <div id="contact-us" className="contact">
      <div className="contact-left">
        <span className="orangeText">Our Contact Us</span>
        <span className="primaryText">Easy to contact us</span>
        <span className="secondaryText">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better{" "}
        </span>
        <div className="contact-model">
          <div className="contact-row">
            <div className="contact-content">
              <div className="contact-up">
                <div className="contact-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="contact-low">
                <button >Call Now</button>
              </div>
            </div>
            <div className="contact-content">
              <div className="contact-up">
                <div className="contact-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="contact-low">
                <button>Chat now</button>
              </div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-content">
              <div className="contact-up">
                <div className="contact-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="primaryText">Video Call</span>

                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="contact-low">
                <button>Video Call Now</button>
              </div>
            </div>
            <div className="contact-content">
              <div className="contact-up">
                <div className="contact-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height={25}
                    width={25}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">021 123 145 14</span>
                </div>
              </div>
              <div className="contact-low">
                <button>Message Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-img">
          <img src={contactPNG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
