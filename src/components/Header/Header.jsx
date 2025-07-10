import React from 'react';
import './Header.css';
import CV from "../../assets/Sachin_Meshram.pdf";
import { FaLinkedin } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { BiCode, BiCodeBlock, BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Profile from "../../assets/sachin.png"
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
              href={CV}
              download
            >
              download resume
            </a>
              <Link className="btn btn-primary" to={`/work`}>My Work Gallery</Link>
      
          </div>

          {/*  social icons different componeant  */}
          <div className="header_socials">
            <a href="https://www.linkedin.com/in/sachin-meshram248" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sachin9548" target="_blank">
              <FaFileCode />
            </a>
            <a href="https://leetcode.com/Sachin_9548/" target="_blank">
              <SiLeetcode />
            </a>
             <a href=" https://auth.geeksforgeeks.org/user/sachinkhjk" target="_blank">
              <BiCode />
            </a>
           
          </div>

          <div className="me">
            <img src={Profile} alt="sachin meshram" />
          </div>
        
          
          <div 
  style={{
    position: "sticky",
    top: "400px", // Stick near the top after scrolling 100px
    alignSelf: 'flex-end',
    maxWidth: '400px',
    padding: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'left',
    zIndex: 1000,
    borderRadius: '8px',
    marginLeft: 'auto',
    marginRight: '150px'
  }}
            className="displaynoneinmobile"
>
  <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Sachin Meshram</h1>
  <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
    Full Stack Developer (MERN). B.Tech graduate (2024). Skilled in frontend, backend, and database technologies.
  </p>
</div>

          
         

          <a href="#contact" className="scroll_down">
            scroll down
          </a>
        </div>
      </header>
    </>
  );
}
