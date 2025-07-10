import React from "react";
import Footer from "../Footer/Footer";
import "../Project/Project.css";
import { Link } from "react-router-dom";
import "./Mywork.css";
import { FrontData } from "../Data/Frontend.js";
import { ReactData } from "../Data/React.js";
import { FullStackData } from "../Data/Fullstack.js";
import { CodeData } from "../Data/CodeProfile.js";




export default function Mywork() {
  return (
    <div>
      <Link className="btn btn-primary back" to={`/`}>
        Back
      </Link>

      <section id="potfolio">
        <h1>Welcome to my work gallery</h1>
        <h5>my resent work</h5>

        <h2>Full Stack Project Using MERN</h2>

        <div className="container portfolio_container">
          {FullStackData.map((Full,index) => {
            return (
              <article className="portfoli_item" key={index}>
                <div className="portfolio_item_img">
                  <img src={Full.url} alt="" />
                </div>
                <h3>{Full.name}</h3>
                <span className="titalinfo">({Full.subname})</span>
                <p className="text-light info">{Full.detail}</p>
                <h4 className="text-light info">Technology:- {Full.Tech}</h4>
                <a href={Full.github} target="_blank" class="btn">
                  github
                </a>
                <a
                  href={Full.live}
                  target="_blank"
                  className="btn btn-primary"
                >
                  live
                </a>
              </article>
            );
          })}
          
        </div>

        <h2>React Js Projects</h2>
        
        <div className="container portfolio_container">
          {ReactData.map((React,index) => {
            return (
              <article className="portfoli_item" key={index}>
                <div className="portfolio_item_img">
                  <img src={React.url} alt="" />
                </div>
                <h3>{React.name}</h3>
                <span className="titalinfo">({React.subname})</span>
                <p className="text-light info">{React.detail}</p>
                <h4 className="text-light info">Technology:- {React.Tech}</h4>
                <a href={React.github} target="_blank" class="btn">
                  github
                </a>
                <a
                  href={React.live}
                  target="_blank"
                  className="btn btn-primary"
                >
                  live
                </a>
              </article>
            );
          })}
        </div>

        <h2>frontend project by using HTML CSS JS</h2>

        <div className="container portfolio_container">
            {FrontData.map((Front,index) => {
            return (
              <article className="portfoli_item" key={index}>
                <div className="portfolio_item_img">
                  <img src={Front.url} alt="" />
                </div>
                <h3>{Front.name}</h3>
                <span className="titalinfo">({Front.subname})</span>
                <p className="text-light info">{Front.detail}</p>
                <h4 className="text-light info">Technology:- {Front.Tech}</h4>
                <a href={Front.github} target="_blank" class="btn">
                  github
                </a>
                <a
                  href={Front.live}
                  target="_blank"
                  className="btn btn-primary"
                >
                  live
                </a>
              </article>
            );
          })}
       
        </div>

        <h2>My Coding Profiles </h2>
        <div class="container portfolio_container">
           {CodeData.map((Code,index) => {
            return (
              <article class="portfoli_item">
            <div class="profile">
              <h2>{Code.name}</h2>
              <h4 class="text-light info"> Language:- {Code.lang}</h4>

              <a
                href={Code.url}
                target="_blank"
                class="btn btn-primary"
              >
                View Profile
              </a>
            </div>
          </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
