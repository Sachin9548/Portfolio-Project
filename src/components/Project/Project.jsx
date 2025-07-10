import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { ProjectData } from "../Data/ProjectPage.js";


export default function Project() {
  return (
    <div>
      <section id="potfolio">
        <h5>my resent work</h5>
        <h2>Projects</h2>
        <div className="container portfolio_container">
          
            {ProjectData.map((Project,index) => {
            return (
              <article className="portfoli_item">
            <div className="portfolio_item_img">
              <img src={Project.url} alt="" />
            </div>
           <h3>{Project.name}</h3>
            <span className="titalinfo">({Project.subname})</span>
            <p className="text-light info">
            {Project.detail}
            </p>
            <h4 className="text-light info"> Technology:- {Project.Tech}</h4>
            <Link className="btn" to={`/work`}>
              More
            </Link>
         
          </article>
            );
          })}
          
        </div>
      </section>
    </div>
  );
}
