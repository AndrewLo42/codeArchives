import React from 'react';
import TechCard from './tech-card';

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [
        {
          name: 'GitHub',
          src: 'fab fa-github'
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
        }

      ],
      showing: false
    };
  }

  toggleToolsPanel() {
    this.setState({ showing: !this.state.showing });
    document.querySelector('.full-sidebar').classList.toggle('nav-active');
  }

  renderToolsCards() {
    const toolsList = this.state.tools.map(tech =>
      <TechCard key={tech.name} tech={tech}/>);
    return toolsList;
  }

  render() {
    return (
      <div className="" id="t2">
        <div className="page" id="p2">
          <section className="icon fa fa-keyboard-o"><span className="title">Tools</span></section>
          <div className="side-title">Tools</div>
          <div className="container skill-row">
            <div className="row">
              {this.renderToolsCards()}
            </div>

          </div>
          <div className="ml-4 row">
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
