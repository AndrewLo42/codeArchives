import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';
import Background from './background';
import Home from './scrollableHome';
import Tools from './tools';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Hobbies from './hobbies';
import NavBar from './navbar';
import AnimatedSwitch from './page-animation';

class RoutedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          component: Home,
          path: '/'
        },
        {
          component: Projects,
          path: '/projects'
        },
        {
          component: Skills,
          path: '/skills'
        },
        {
          component: Tools,
          path: '/tools'
        },
        {
          component: Contact,
          path: '/contact'
        },
        {
          component: Hobbies,
          path: '/hobbies'
        }
      ]
    };
  }

  render() {
    const Routes = withRouter(({ location }) => {
      return (
        <AnimatedSwitch location={location}>
          {this.state.routes.map(route => {
            return (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </AnimatedSwitch>
      );
    });
    return (
      <Router>
        <Route render={({ location }) => (
          <>
            <NavBar />

            <Background />
            <Routes />
          </>
        )}
        />
      </Router>
    );
  }
}

export default RoutedApp;
