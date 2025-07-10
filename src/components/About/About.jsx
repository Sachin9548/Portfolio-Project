import React from 'react';
import './About.css';
import { CgWebsite } from 'react-icons/cg';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FaRegFileCode } from 'react-icons/fa6';
import { SiExpressvpn } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import Profile from "../../assets/sachin.png"

export default function About() {
  return (
    // <!-- about component -->
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Profile} alt="sachin meshram" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <SiExpressvpn />
              <h5>experiance</h5>
              <small>1+ years working</small>
            </article>
            {/* <article class="about_card">
              <FaEarthAmericas />
              <h5>clients</h5>
              <small>1+ years working</small>
            </article> */}
            <article class="about_card">
              <GrProjects />
              <h5>projects</h5>
              <small>20+ projects</small>
            </article>
          </div>

          <p>
            👋 Hello! I’m Sachin Meshram, a dedicated software developer with a love for
            creating efficient solutions. My journey in the world of code has
            been exhilarating, and I thrive on turning ideas into reality.
          </p>

          <a href="#contact" class="btn btn-primary">
            let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
