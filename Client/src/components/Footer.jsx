import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Footer = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrs2gmr",
        "template_1atvw44",
        form.current,
        "2vAafyWokU5vCYmE9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(!isSent);
          setTimeout(() => {
            if (result.status === 200) {
              setIsSent(false);
            }
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="footer">
      <div className="footer-childs">
        <h1>Kizusi Cars</h1>
        <p>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <div className="info-cont">
          <i class="fa-solid fa-square-phone"></i>
          <p>(254) -707-252-331</p>
        </div>
        <div className="info-cont">
          <i class="fa-regular fa-envelope"></i>
          <p>samowen815@gmail.com</p>
        </div>

        <div className="social-cont">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="footer-childs">
        <h1>ABOUT US</h1>
        <a href="#/">Kipro Centre Nairobi</a>
        <a href="#/">Brand</a>
        <a href="#/">car dealers</a>
        <a href="#/">car reviews</a>
        <a href="#/">how we work</a>
      </div>
      <div className="footer-childs">
        <h1>WORKING HOURS</h1>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="footer-childs">
        <h1>SUBSCRIPTION</h1>
        <p>Subscribe your Email address for latest news & updates.</p>
        <form className="footer-form" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="user_email"
          />
          <input type="submit" value="Send" />
        </form>
        <div
          style={{ display: isSent ? "flex" : "none" }}
          className="confirm-cont"
        >
          <img src="check.png" alt="" />
          <p>Subscribed succesfully!</p>
        </div>
      </div>
      <p className="copy">©2025, Anga Tech & Consultancy. All rights reserved.</p>
    </div>
  );
};

export default Footer;
