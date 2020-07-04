import React from 'react';
import { NavLink } from 'react-router-dom';

class NavModule extends React.Component {

  closeModal() {
    document.querySelector('.full-nav').classList.toggle('close-nav');
    setTimeout(() => this.props.closeMenuModal(), 100);

  }

  render() {
    return (
      <div className="mb-5 full-nav text-center">
        <ul id="full-menu" className="mb-4">
          {/* <div className="nav-icon " onClick={() => this.showMenuModal()}></div> */}
          <li className="bracket-hover nav-piece">
            <NavLink
              onClick={() => this.closeModal()}
              to={'/'}
              className=" nav-page-list-item" >

                  Home
            </NavLink>
          </li>
          <li className="bracket-hover nav-piece">
            <NavLink
              onClick={() => this.closeModal()}
              to={'/projects'}
              className=" nav-page-list-item">

                  Projects
            </NavLink>
          </li>
          <li className="bracket-hover nav-piece">
            <NavLink
              onClick={() => this.closeModal()}
              to={'/skills'}
              className=" nav-page-list-item">

                  Skills
            </NavLink>
          </li>
          <li className="bracket-hover nav-piece">
            <NavLink
              onClick={() => this.closeModal()}
              to={'/contact'}
              className="  nav-page-list-item">

                  Contact
            </NavLink>
          </li>
          <li className="bracket-hover nav-piece">
            <NavLink
              onClick={() => this.closeModal()}
              to={'/none'}
              className=" nav-page-list-item">

                  Interests
            </NavLink>
          </li>
          <li className="bracket-hover nav-piece">
            <a href="https://www.linkedin.com/in/AndrewCLo/"
              onClick={() => this.closeModal()}
              target="_blank"
              rel="noopener noreferrer"
              className=" nav-page-list-item mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
              aria-label="LinkedIn">
             LinkedIn
            </a>

          </li>
          <li className="bracket-hover nav-piece">
            <a href="https://github.com/andrewlo42"
              onClick={() => this.closeModal()}
              target="_blank"
              rel="noopener noreferrer"
              className=" nav-page-list-item mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
              aria-label="GitHub">
              GitHub
            </a>

          </li>
          <li className=" bracket-hover nav-piece">
            <a href="./assets/Andrew_Lo.pdf"
              onClick={() => this.closeModal()}
              target="_blank"
              rel="noopener noreferrer"
              className=" nav-page-list-item mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
              aria-label="GitHub">
              Resume
            </a>

          </li>
        </ul>
        <div className="mt-4 d-none d-md-block full-nav-content-container">
          <h2>About Me</h2>
          <div className="fancy-border nav-img">
            {/* <img src="./images/dice.jpg" className=" img-fluid nav-img"></img> */}
          </div>
          <p className="pt-2 nav-about-me">I&apos;m well versed in JavaScript (ES5 & ES6), React.js, jQuery, Node.js, Express, SQL, HTML, and CSS. I&apos;m skilled with tools like Git/GitHub, Postman, npm, and Webpack. I&apos;ve had the privilege of working on team-based and solo projects to build full-stack web applications, and I am well equipped to tackle any challenge.</p>
        </div>
      </div>
    );

  }

}

export default NavModule;
