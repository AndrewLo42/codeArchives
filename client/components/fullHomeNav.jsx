import React from 'react';
import {
  Navbar,
  Container,
  Collapse
} from 'reactstrap';
import Scrollspy from 'react-scrollspy';

// import {
//   Link,
//   animateScroll as scroll
// } from 'react-scroll';

class HomeNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isOpen: false
    });
    this.handleToggle = this.handleToggle.bind(this);
    this.handleColorToggle = this.handleColorToggle.bind(this);
  }

  handleToggle(destination) {
    switch (destination) {
      case 'app':
        document.querySelector('#home-project').scrollIntoView({ block: 'end', behavior: 'smooth' });
        break;
      case 'skill':
        document.querySelector('#home-skills').scrollIntoView({ block: 'end', behavior: 'smooth' });
        break;
      case 'contact':
        document.querySelector('#home-contact').scrollIntoView({ block: 'end', behavior: 'smooth' });
        break;
      default:
        document.querySelector('#home-home').scrollIntoView({ block: 'end', behavior: 'smooth' });
        break;
    }

    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  handleColorToggle() {
    this.props.toggleColor(event.target.name);
  }

  render() {
    let offset = -90;
    if (window.innerWidth < 768) {
      offset = -286;
    }
    return (
      <>
        <Container fluid={true} className={' shadow-lg header-item sticky-top ' + this.props.isHide}>

          <Navbar expand="md">
            {/* <NavbarBrand onClick={() => {
              document.querySelector('.home-home').scrollIntoView({ block: 'end', behavior: 'smooth' });
              if (this.state.isOpen) {
                this.handleToggle(offset);
              }
            }}
            className="pointer decoration-none">
              <Row className="pl-2">
                <img src="./images/die20.png"
                  className="img-fluid header-logo" />
                <div className="home-nav-name text-center my-auto ml-3">ALo</div>
              </Row>
            </NavbarBrand> */}

            <Collapse navbar>
              <Scrollspy className="scrollspy-nav" componentTag={'div'} items={['home-project', 'home-skills', 'home-contact']} currentClassName="is-current" >
                <div href="#home-projects" className=" ml-5 col-3 text-center">
                  <div className=" w-60 pointer-spin  nav-link" onClick={() => this.handleToggle('app')}>Applications</div>
                </div>
                <div href="#home-skills" className="ml-lg-5  col-3 text-center">
                  <div className="w-50 pointer-spin nav-link" onClick={() => this.handleToggle('skill')}>Skills</div>
                </div>
                <div href="#home-contact" className="ml-lg-5  mr-3 col-3 text-center">
                  <div className="w-50 pointer-spin nav-link" onClick={() => this.handleToggle('contact')}>Contact</div>
                </div>
              </Scrollspy>
              <div className="navbar-img-container">
                <img className="navbar-img" src="./images/die20.png" onClick={() => {
                  document.querySelector('.home-home').scrollIntoView({ block: 'end', behavior: 'smooth' });
                  if (this.state.isOpen) {
                    this.handleToggle(offset);
                  }
                }}></img>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default HomeNavBar;
