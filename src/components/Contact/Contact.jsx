import React from 'react';
import './Contact.css';
import { SiLeetcode } from 'react-icons/si';
import { FaExclamationCircle, FaWhatsapp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <h5>get in touch</h5>
        <h2>contact me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article class="option">
              <BiMailSend />
              <h4>email</h4>
              <h5>sachinm9548@gmail.com</h5>
              {/* <a href="mailto:sachinm9548@gmail.com" target="_blank">
                send the message
              </a> */}
            </article>

            <article className="option">
              <FaLinkedin />
              <h4>Linked In</h4>
              <h5>Sachin Meshram</h5>
              {/* <a href="https://m.me/uninc id" target="_blank">
                send the message
              </a> */}
            </article>

            <article class="option">
              <FaWhatsapp />
              <h4>whatsapp</h4>
              <h5>+91 8805155743</h5>
              {/* <a
                href="https://api.whatsapp.com/send?phone=+918805155743"
                target="_blank"
              >
                send the message
              </a> */}
            </article>
          </div>
          {/* <!-- section two --> */}
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              required
            />
            <input type="email" name="name" placeholder="your email" required />
            <textarea
              name="meassage"
              rows="7"
              placeholder="your meassage"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              send meassage
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
