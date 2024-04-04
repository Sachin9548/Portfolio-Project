import React from 'react';
import './Skill.css';
import { FaRegFileCode } from 'react-icons/fa6';

export default function Skill() {
  return (
    <section id="experiance">
      <h5>what skills i have</h5>
      <h2>my experiance</h2>

      <div className="container experiance_container">
     
        <div className="experiance_frontend">
          <h3>frontend technologies</h3>
          <div className="experiance_content">
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>HTML</h4>
                <small className="text-light">experianced</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>CSS</h4>
                <small className="text-light">experianced</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">experianced</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">experianced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiance_backend">
          <h3>backend technologies</h3>
          <div className="experiance_content">
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>node js</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>express js</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>mongodb atlas</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiance_backend">
          <h3>programming languages</h3>
          <div className="experiance_content">
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>Java</h4>
                <small className="text-light">Learner</small>
              </div>
            </article>
            <article className="experiance_detail">
              <FaRegFileCode />
              <div>
                <h4>C</h4>
                <small className="text-light">basic</small>
              </div>
            </article>
          </div>
        </div>
     
      </div>

    </section>
  );
}
