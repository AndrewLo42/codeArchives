import React from 'react';
import { NavLink } from 'react-router-dom';
import NavModule from './nav-modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolTip: false,
      toolTipWord: null,
      showing: false
    };
    this.showToolTip = this.showToolTip.bind(this);
    this.showMenuModal = this.showMenuModal.bind(this);
  }

  renderToolTip() {
    if (this.state.toolTip) {
      return (
        <div className="tool-tip">
          <div className="p-2">{this.state.toolTipWord}</div>
        </div>);
    }
  }

  showToolTip(section) {
    this.setState({ toolTip: true, toolTipWord: section });
  }

  showMenuModal() {
    this.setState({ showing: !this.state.showing });
    document.querySelector('#static-menu').classList.toggle('nav-active');
    document.querySelector('#menu').classList.toggle('show-nav');
    document.querySelector('.full-nav').classList.toggle('show-full-nav');

  }

  renderFullMenu() {
    if (this.state.showing) {
      return (<NavModule/>);
    }
  }

  renderNav() {

    const homeTip = (this.state.toolTipWord === 'Home');
    const projectTip = (this.state.toolTipWord === 'Projects');
    const skillsTip = this.state.toolTipWord === 'Skills';
    const contactTip = this.state.toolTipWord === 'Contact';
    const hobbiesTip = this.state.toolTipWord === 'Interests';
    // if (this.state.showing) {
    //   document.querySelector('#menu').classList.toggle('show-nav');
    // }

    const shifted = location.pathname === '/' ? 'slideOutNav' : 'slideOutNav';
    return (
      <div className={`text-center ${shifted}`}>
        <ul id="menu">
          {/* <div className="nav-icon " onClick={() => this.showMenuModal()}></div> */}
          <li className="first-nav-icon nav-piece">
            <NavLink
              onMouseEnter={() => { this.showToolTip('Home'); }}
              onMouseLeave={() => { this.setState({ toolTip: false }); }}
              to={'/'}
              className="shine sidebar-page-list-item sidebar-home" >
              {homeTip && (
                <>{this.renderToolTip()}</>
              )}
              <i className="fas fa-home pr-2" />
              {/* Home */}
            </NavLink>
          </li>
          <li className="nav-piece">
            <NavLink onMouseEnter={() => this.showToolTip('Projects')}
              onMouseLeave={() => { this.setState({ toolTip: false }); }}
              to={'/projects'}
              className="shine sidebar-page-list-item sidebar-store-finder">

              {projectTip && (
                <>{this.renderToolTip()}</>
              )}
              <i className="fas fa-project-diagram pr-2" />
              {/* Works */}
            </NavLink>
          </li>
          <li className=" nav-piece">
            <NavLink
              onMouseEnter={() => { this.showToolTip('Skills'); }}
              onMouseLeave={() => { this.setState({ toolTip: false }); }}
              to={'/skills'}
              className="shine sidebar-page-list-item sidebar-hangouts">
              {skillsTip && (
                <>{this.renderToolTip()}</>
              )}
              <i className="fa fa-keyboard-o pr-2" />
              {/* Skills */}
            </NavLink>
          </li>
          <li className=" nav-piece">
            <NavLink
              onMouseEnter={() => { this.showToolTip('Contact'); }}
              onMouseLeave={() => { this.setState({ toolTip: false }); }}
              to={'/contact'}
              className="shine sidebar-page-list-item sidebar-store-finder">
              {contactTip && (
                <>{this.renderToolTip()}</>
              )}
              <i className="far fa-envelope pr-2" />
              {/* Links */}
            </NavLink>
          </li>
          <li className=" nav-piece">
            <NavLink
              onMouseEnter={() => { this.showToolTip('Interests'); }}
              onMouseLeave={() => { this.setState({ toolTip: false }); }}
              to={'/hobbies'}
              className="shine sidebar-page-list-item sidebar-events">
              {hobbiesTip && (
                <>{this.renderToolTip()}</>
              )}
              <i className="fas fa-dice pr-2" />
              {/* Extra */}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    let navTip = null;

    // const navTip = ((this.state.toolTipWord) === 'Menu');
    if (this.state.showing) {
      navTip = ((this.state.toolTipWord) === 'Close');
    } else {
      navTip = ((this.state.toolTipWord) === 'Menu');
    }
    return (
      <div className=" ">
        <ul id="static-menu">
          <div
            className="  nav-icon "
            onMouseEnter={() => { this.showToolTip('Menu'); }}
            onMouseLeave={() => { this.setState({ toolTip: false }); }}
            onClick={() => this.showMenuModal()}>
            {navTip && (
              <>{this.renderToolTip()}</>
            )}
          </div>
          {this.renderNav()}
          <NavModule closeMenuModal={this.showMenuModal}/>
        </ul>
      </div>
    );
  }
}

export default NavBar;
