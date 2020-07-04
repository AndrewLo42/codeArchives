import React from 'react';
import TechCard from './tech-card';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
      skills: [
        {
          name: 'React.js',
          src: 'devicon-react-original'
        },
        {
          name: 'JavaScript',
          src: 'devicon-javascript-plain'
        },
        {
          name: 'HTML5',
          src: 'devicon-html5-plain'
        },
        {
          name: 'jQuery',
          src: 'devicon-jquery-plain'
        },
        {
          name: 'PostgreSQL',
          src: 'devicon-postgresql-plain'
        },
        {
          name: 'Node.JS',
          src: 'devicon-nodejs-plain'
        },
        {
          name: 'CSS3',
          src: 'devicon-css3-plain'
        },
        {
          name: 'Arduino',
          src: 'fas fa-infinity'
        },
        {
          name: 'Bootstrap 4',
          src: 'devicon-bootstrap-plain-wordmark'
        },
        {
          name: 'Ruby',
          src: 'devicon-ruby-plain'
        }

      ],
      tools: [
        {
          name: 'GitHub',
          src: 'devicon-github-plain'
        },
        {
          name: 'AWS',
          src: 'devicon-amazonwebservices-original'
        },
        {
          name: 'nginx',
          src: 'devicon-nginx-original'
        },
        {
          name: 'Webpack',
          src: 'devicon-webpack-plain'
        },
        {
          name: 'Babel',
          src: 'devicon-babel-plain'
        },
        {
          name: 'Ubuntu',
          src: 'devicon-ubuntu-plain'
        },
        {
          name: 'Chrome Dev Tools',
          src: 'devicon-chrome-plain'
        },
        {
          name: 'npm',
          src: 'fab fa-npm'
        },
        {
          name: 'VS Code',
          src: 'devicon-visualstudio-plain'
        },
        {
          name: 'Figma',
          src: 'fab fa-figma'
        },
        {
          name: 'Docker',
          src: 'devicon-docker-plain'
        },
        {
          name: 'Slack',
          src: 'devicon-slack-plain'
        },
        {
          name: '',
          src: 'blank'
        }

      ],
      showing: false
    };
    this.scrollBottom = this.scrollBottom.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  toggleToolsPanel() {
    this.setState({ showing: !this.state.showing });
    document.querySelector('.full-sidebar').classList.toggle('nav-active');
  }

  renderSkillsCards() {
    const skillsList = this.state.skills.map(tech =>
      <TechCard key={tech.name} tech={tech} />);
    return skillsList;
  }

  renderToolsCards() {
    const toolsList = this.state.tools.map(tech =>
      <TechCard key={tech.name} tech={tech} />);
    return toolsList;
  }

  scrollBottom() {
    document.querySelector('.blank').scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  scrollTop() {
    document.querySelector('#skills-top').scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  render() {

    return (
      <div className="" id="t3">
        <div className="page" id="p3">
          <section className="text-center skills-icon fa fa-keyboard-o"><span className="title"> Skills </span></section>
          {/* <div className="side-title">Skills</div> */}
          <div className="pl-2 row skill-row justify-center">
            <div id="skills-top"></div>
            <div onClick={this.scrollTop} className="scroll-indicator-top fa fa-chevron-up"></div>
            <div className="pt-4 col cards-col">
              <h2 className="side-title skills-col-header">Tech</h2>
              {this.renderSkillsCards()}
            </div>
            <div onClick={this.scrollBottom} className="scroll-indicator fa fa-chevron-down"></div>
            <div className="pt-4 col cards-col ">

              <h2 className="side-title tools-col-header">Tools</h2>
              {this.renderToolsCards()}

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Skills;
