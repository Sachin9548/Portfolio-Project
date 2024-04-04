import React from 'react';
import './Footer.css';
import { FaHome } from 'react-icons/fa';
import { BiCode, BiCodeBlock, BiDetail } from 'react-icons/bi';
import { FaBookTanakh } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { IoIosContact } from 'react-icons/io';

import { FaLinkedin } from 'react-icons/fa';
import { FaFileCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#">
          <h4>Sachin Meshram | Software Developer</h4>
        </a>
        
        <div className="container footer_container">
          <div className="footer_mid">
            <ul className="parmalinks">
              <li>
                <FaHome /> <a href="#">Home</a>
              </li>
              <li>
                <BiDetail /> <a href="#about">about</a>
              </li>
              <li>
                <FaBookTanakh /> <a href="#expeiance">experiance</a>
              </li>
              <li>
                <GrProjects /> <a href="#potfoli">potfolio</a>
              </li>
              <li>
                <IoIosContact />
                <a href="#contact">contact</a>
              </li>
            </ul>

            <div className="footer_socials">
              <SiLeetcode /> <a href="">LeetCode</a>
              <BiCode /> <a href="">GreeksforGreek</a>
              <BiCodeBlock /> <a href="">hacker rank</a>
            </div>
          </div>

          <div className="footer_copyright">
            <small>&copy; Sachin Meshram. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
