import React from 'react';
import './Nav.css';
import { FaHome } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { FaBookTanakh } from 'react-icons/fa6';
import { GrProjects } from 'react-icons/gr';
import { IoIosContact } from 'react-icons/io';
export default function Nav() {
  return (
    <nav>
      <a href="#" className="active">
        <FaHome />
      </a>
      <a href="#about">
        <BiDetail />
      </a>
      <a href="#experiance">
        <FaBookTanakh />
      </a>
      <a href="#potfolio">
        <GrProjects />{' '}
      </a>
      <a href="#contact">
        <IoIosContact />{' '}
      </a>
    </nav>
  );
}
