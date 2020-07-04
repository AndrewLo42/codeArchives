import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="page" id="p1">
        <section className="home-icon pb-2 ">
          <div className=" container home-img">
            {/* <div className="container home-img justify-content-center"> */}
            {/* <img src="./images/coffeekid.jpg" className="img-fluid home-profile"></img> */}
            <h2 className="home-img-msg"> Andrew Lo</h2>
          </div>
          <div className="container">
            <div className={'row mt-5 justify-content-center contact-row'}>
              <p className="text-center mb-md-0 mx-3">
                <a href="https://www.linkedin.com/in/AndrewCLo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
                  aria-label="LinkedIn">
                  <i className="fab fa-linkedin footer-icon m-auto" />
                </a>
              </p>
              <p className=" text-center mb-md-0 mx-3">
                <a href="./assets/Andrew_Lo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mr-5 decoration-none pointer mr-2"
                  aria-label="Resume Download">
                  <i className="far fa-file-alt footer-icon m-auto" />
                </a>
              </p>
              <p className="text-center mb-md-0 mx-3">
                <a href="https://github.com/andrewlo42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 decoration-none default-nav contact-github pointer mr-2"
                  aria-label="Github">
                  <i className="fab fa-github footer-icon m-auto" />
                </a>
              </p>
            </div>
          </div>
          <span className="home-sub">My name is Andrew Lo</span></section>
        <span className="home-title container"> Hello there! I am a Software Engineer with a passion for coding and an unyielding pursuit for learning.</span>
      </div>
    );
  }
}

export default Home;
