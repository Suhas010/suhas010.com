import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
console.log(config.experiance)
const getExperince = () => config.experiance.map(({name, link, position, duration, description, stack}) => (
  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
  <div className="resume-content">
    <h3 className="mb-0">{position}</h3>
    <div className="subheading mb-3">
      <a href={link} target="_blank">
        {name}
      </a>
    </div>
    <p>
     {description}
    </p>
    <div className="tech-used">
      {stack.map(t => <span>{t}</span>)}
    </div>
  </div>
  <div className="resume-date text-md-right">
    <span className="text-primary">{duration}</span>
  </div>
</div>
))
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100 custome-center">
          <h1 className="mb-0"><span className="text-primary"> Hello</span> World,</h1>
          <h1>I'm</h1>
          <h1 className="mb-0">
            {config.firstName} 
            <span className="text-primary">{config.lastName}</span>
          </h1>
          {/* <div className="subheading mb-5">
            {config.address} · <tel>{config.phone}</tel> ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div> */}
          <hr className="small hr" />
          <p className="lead mb-5">
            Front-End Engineer with 3+ years' of experience in crafting products and software for various domains like Media, eCommerce,
            CRM and Helth Care.<br/>
            I spend most of my free time and weekends on sharpening my skills and learning new skills.
          
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className=" small hr" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
            {getExperince()}
        </div>
      </section>

      <hr className=" small hr" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Nowrosjee Wadia Collage</h3>
              <div className="subheading mb-3">Masters Of Computer Science</div>
              {/* <p>GPA: </p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2015 - December 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Pune University</h3>
              <div className="subheading mb-3">Bachlor of Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2012 - April 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className=" small hr" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. I like to go for solo road trips. Whenever I'm not learning anything new or not working on personal projects on weekends I love to go for ride.
            Sometimes with my gorgeus wife and Sometimes with my friends
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>
      <hr className=" small hr" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className=" small hr" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-certificate  text-warning"></i>
              Freecodecamp -
              <a
                href="https://www.freecodecamp.org/certification/suhas010/responsive-web-design" target="_blank">
                  JavaScript Algorithms and Data Structures Cirtification
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-certificate  text-warning"></i>
              Freecodecamp - 
              <a
                href="https://www.freecodecamp.org/certification/suhas010/responsive-web-design" target="_blank">
                Responsive Web Desiging
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Shortlisted in the top 40 profiles among 8k participants on <a href="https://www.hackerrank.com/" target="_blank">Hackerank</a> in Hiring Competition for <a href="https://www.castsoftware.com/" target="_blank"> Cast Software</a>.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Shortlisted in the top 50 profiles among 3k participants on <a href="https://www.hackerrank.com/" target="_blank">Hackerank</a> in Hiring Competition for <a href="https://www.varian.com/" target="_blank"> Varian medical</a>.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd </sup>
              &nbsp; Position in National Level Project Competition Held at M.J Collage Jalgaon, while attending Post Graduation
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd </sup>
              &nbsp; Position in National Level Project Competition Held at M.J Collage Jalgaon, while attending Graduation
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd </sup>
              &nbsp; Price in Blind Faith Programming Competition
            </li>
          </ul>
        </div>
      </section>
        <div className="bottom-social-links">
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
    </div>
  </Layout>
);

export default IndexPage;
