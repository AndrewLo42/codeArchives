import React from 'react';
import HomeNavBar from './fullHomeNav';

// import ReadingProgress from './progressBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.projects = React.createRef();
    this.skills = React.createRef();
    this.contact = React.createRef();
    this.state = {
      isHide: false,
      prevScroll: 0,
      projectsActive: 'ready',
      skillsActive: 'ready',
      contactActive: 'ready'
    };
    this.hideBar = this.hideBar.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    const projects = this.projects.current;
    const skills = this.skills.current;
    const contact = this.contact.current;
    document.body.style.background = '#fff';
    var options = {
      root: null,
      threshold: 0.3
    };
    var callBack = obs => {
      var target = obs[0].target;

      if (target === projects) {
        if (!obs[0].isIntersecting) return;
        this.setState({ projectsActive: 'active' });
        observer.unobserve(projects);
      } else if (target === skills) {
        if (!obs[0].isIntersecting) return;
        this.setState({ skillsActive: 'active' });
        observer.unobserve(skills);
      } else if (target === contact) {
        if (!obs[0].isIntersecting) return;
        this.setState({ contactActive: 'active' });
        observer.unobserve(contact);
      }
    };
    var observer = new IntersectionObserver(callBack, options);
    observer.observe(projects);
    observer.observe(skills);
    observer.observe(contact);
  }

  hideBar() {
    const { isHide } = this.state;
    this.setState({
      prevScroll: event.target.scrollTop
    });
    event.target.scrollTop > this.state.prevScroll
      ? !isHide && this.setState({
        isHide: true,
        prevScroll: event.target.scrollTop
      })
      : isHide && this.setState({
        isHide: false,
        prevScroll: event.target.scrollTop
      });
  }

  handleNext(destination) {
    switch (destination) {
      case 'projects':
        document.querySelector('#home-project').scrollIntoView({ block: 'start', behavior: 'smooth' });
        break;
    }
  }

  render() {
    const classHide = this.state.isHide ? 'hide' : '';
    const target = React.createRef();
    return (
      <div onScroll={this.hideBar} className={'full-page'} id="p1">
        <main ref={target}>
          <HomeNavBar isHide={classHide} />
          <section className="home-home">
            <section className="home-icon pb-2 px-2" id="">
              <div className=" container home-img">
                <h2 className="home-img-msg"> Andrew Lo</h2>
                <span className="home-title-inner home-title container">  I am a Software Engineer with a passion for coding and learning.</span>

              </div>
              <div className="">
                <div className={' mt-5 justify-content-center contact-row side-contacts'}>
                  <p className="text-center mb-md-0 mx-3 py-3">
                    <a href="https://www.linkedin.com/in/AndrewCLo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-5 decoration-none default-nav contact-linkedin pointer"
                      aria-label="LinkedIn">
                      <i className="fab fa-linkedin footer-icon m-auto" />
                    </a>
                  </p>
                  <p className=" text-center mb-md-0 py-3 mx-3">
                    <a href="./assets/Andrew_Lo.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mr-5 decoration-none pointer "
                      aria-label="Resume Download">
                      <i className="far fa-file-alt footer-icon m-auto" />
                    </a>
                  </p>
                  <p className="text-center mb-md-0 mx-3 py-3">
                    <a href="https://github.com/andrewlo42"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-5 decoration-none default-nav contact-github pointer "
                      aria-label="Github">
                      <i className="fab fa-github footer-icon m-auto" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="home-sub">
                <span className="">Hi! I&apos;m Andrew Lo</span>
                {/* <span className="home-title container">  I am a Software Engineer with a passion for coding and learning.</span> */}
              </div>
            </section>
            <section className="scroll-icon">
              <a onClick={() => this.handleNext('projects')}><span></span>Scroll</a>
            </section>
          </section>
          <div className="semicircle svg">
            <svg width="500" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
              <defs>
                <clipPath id="shape">
                  <path d="M0,0 L0,0 Q250,300 500,0 L500,0 Z"></path>
                </clipPath>
              </defs>
              <rect x="0" y="0" width="500" height="150" fill="#262429" clipPath="url(#shape)"></rect>
            </svg>
          </div>
          <div ref={this.projects} name="Projects" className={`home-projects ${this.state.projectsActive}`} id="home-project">
            <section id="home-about" className="home-about text-center container">
              <h1>About Me</h1>
              <div>I recently finished a coding bootcamp, LearningFuze, and I&apos;m both ready and well equipped to tackle any challenge.</div>
              <div className="mt-3">I&apos;ve had the privilege of working on team-based and solo projects to build full-stack web applications, and I am excited to learn more and take part of new experiences!</div>
              <div className="mt-3"> I am currently located in Orange County, California, and am open to relocation or remote work.</div>
              <div>Contact me with any jobs or project ideas!</div>
              <div className="mt-4">
                <a
                  className="  contact-link"
                  href="https://contact.andrewclo.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className={'shine contact-btn '}>
                  Messsage Me

                  </button>
                </a>
              </div>
            </section>
            <section className="home-projects-sub text-center">
              <h1>Projects</h1>
              <div className="home-project-slides container">
                <div className="home-slide">Shadow Realmer</div>
                <div className="home-slide">Wicked Pedals</div>
                <div className="home-slide">Exodia Exodus</div>
              </div>
            </section>

          </div>
          <div ref={this.skills} name="Skill" className={`home-skills ${this.state.skillsActive}`} id="home-skills">
            hello
            <div className="skills-content">
              <svg viewBox="0 0 100 100" >
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>

          </div>
          <div ref={this.contact} className="home-contact" id="home-contact">
            hello
          </div>
        </main>
      </div>
    );
  }

}

export default Home;
