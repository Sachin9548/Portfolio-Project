import React from 'react';
import './Header.css';
// import { CV } from "/src/assets/Sachin_Meshram_Resume_final5.pdf";
import { FaLinkedin } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';

// import { io } from '../../assets/io.jpg';
export default function Header() {
  return (
    // <!-- header here -->
    <>
      <header>
        <div className="container header_container">
          <h5>hello i'am</h5>
          <h1>Sachin Meshram</h1>
          <h5 className="text-light">
            Passionate Software Developer | MERN Stack Enthusiast
          </h5>
          {/* <!-- btn different componeant by cta --> */}
          <div className="cta">
            <a
              className="btn "
              href="/src/assets/Sachin_Meshram_Resume_final5.pdf"
              download
            >
              download resume
            </a>
              <Link className="btn btn-primary" to={`/work`}>My Work Gallery</Link>
      
          </div>

          {/*  social icons different componeant  */}
          <div className="header_socials">
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://gethub.com" target="_blank">
              <FaFileCode />
            </a>
            <a href="https://leetcode.com" target="_blank">
              <SiLeetcode />
            </a>
          </div>

          <div className="me">
            <img src="" alt="sachin meshram" />
          </div>

          <a href="#contact" className="scroll_down">
            scroll down
          </a>
        </div>
      </header>
    </>
  );
}
