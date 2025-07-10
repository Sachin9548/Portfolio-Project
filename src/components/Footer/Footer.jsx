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
                <FaBookTanakh /> <a href="#experiance">experiance</a>
              </li>
              <li>
                <GrProjects /> <a href="#potfolio">potfolio</a>
              </li>
              <li>
                <IoIosContact />
                <a href="#contact">contact</a>
              </li>
            </ul>

            <div className="footer_socials">
                            <BiCode /> <a href="https://auth.geeksforgeeks.org/user/sachinkhjk">GreeksforGreek</a>

              <SiLeetcode /> <a href="https://leetcode.com/Sachin_9548/">LeetCode</a>
              <BiCodeBlock /> <a href="https://www.hackerrank.com/profile/sachinm9548">hacker rank</a>
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
