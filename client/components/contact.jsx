import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

function Contact() {
  return (
    <div className="" id="t5">
      <div className="page" id="p5">
        {/* <section className="icon fas fa-journal-whills"><span className="title"> Contact </span></section> */}
        <div className={'contact-page'}>
          <Container className="footer-container" id="contact">
            <Col className={' title mb-2 footer-title text-center'}>
              Contact Me
              <div className="border-line mb-3"></div>
            </Col>
            <div className="container d-flex justify-content-center">
              <img className="contact-img img-fluid" src="./images/stairprof.jpg"></img>

            </div>
            <Row className={' justify-content-center contact-row'}>
              <p className="contact-item text-center mb-md-0 mx-3">
                <a href="https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
                  className="border-slide pointer"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt mr-2" />Orange County
                </a>
              </p>
              <p className="contact-item text-center mb-md-0 mx-3">
                <a href="mailto:andrewclo42@gmail.com"
                  className="border-slide pointer">
                  <i className="fas fa-envelope solid mr-2" />AndrewCLo42@gmail.com
                </a>
              </p>
              <p className="contact-item text-center mb-md-0 mx-3">
                <a href="tel:+19492325930"
                  className="border-slide pointer">
                  <i className="fas fa-phone mr-2" />(949) 232-5930
                </a>
              </p>
            </Row>
            <div className="mt-3 footer-top">
              <div className="container">
                <Row className={'mt-5 justify-content-center contact-row'}>
                  <p className="text-center mb-md-0 mx-3">
                    <a href="https://www.linkedin.com/in/AndrewCLo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-5 decoration-none default-nav contact-linkedin pointer mr-2"
                      aria-label="LinkedIn">
                      <i className="fab fa-linkedin footer-icon m-auto" />
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
                  <p className=" text-center mb-md-0 mx-3">
                    <a href="./assets/Andrew_Lo.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" decoration-none pointer mr-2"
                      aria-label="Resume Download">
                      <i className="far fa-file-alt footer-icon m-auto" />
                    </a>
                  </p>
                </Row>
              </div>
              <Container className="mt-5 contact-btn-container">
                <Row className="justify-content-center">
                  <a
                    className=" contact-link"
                    href="https://contact.andrewclo.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className={'shine contact-btn '}>
                      Messsage Me

                    </button>
                  </a>

                </Row>
              </Container>
            </div>
          </Container>

        </div>
      </div>
    </div>
  );
}

export default Contact;
