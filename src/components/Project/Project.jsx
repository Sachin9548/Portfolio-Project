import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div>
      <section id="potfolio">
        <h5>my resent work</h5>
        <h2>portfolio</h2>
        <div className="container portfolio_container">
          <article className="portfoli_item">
            <div className="portfolio_item_img">
              <img src="/src/assets/i.png" alt="i" />
            </div>
            <h3>my leatest projects</h3>
            <p className="text-light info">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit or sit amet Lorem
              ipsum dol amet.
            </p>
            <Link className="btn" to={`/work`}>
              More
            </Link>
            {/* <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary"
            >
              live demo
            </a> */}
          </article>

          <article className="portfoli_item">
            <div className="portfolio_item_img">
              <img src="/src/assets/i.png" alt="i" />
            </div>
            <h3>my leatest projects</h3>
            <p className="text-light info">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit or sit amet Lorem
              ipsum dol amet.
            </p>
            <Link className="btn" to={`/work`}>
              More
            </Link>
            {/* <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary"
            >
              live demo
            </a> */}
          </article>

          <article className="portfoli_item">
            <div className="portfolio_item_img">
              <img src="/src/assets/i.png" alt="i" />
            </div>
            <h3>my leatest projects</h3>
            <p className="text-light info">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit or sit amet Lorem
              ipsum dol amet.
            </p>
            <Link className="btn" to={`/work`}>
              More
            </Link>
            {/* <a href="https://github.com" className="btn">
              github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="btn btn-primary"
            >
              live demo
            </a> */}
          </article>
        </div>
      </section>
    </div>
  );
}
