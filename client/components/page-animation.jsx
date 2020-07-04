
import React from 'react';
import { Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { easing } from 'popmotion';

export const AnimatedSwitch = ({ history, location, children, ...rest }) => {

  return (
    <PoseGroup
      flipMove={false}
    >
      <ContextRouteAnimation key={location.pathname}>
        <Switch location={location} {...rest}>
          {children}
        </Switch>
      </ContextRouteAnimation>
    </PoseGroup>
  );
};

export default AnimatedSwitch;

const { cubicBezier } = easing;
var longTail = cubicBezier(0.5, 0.2, 0.2, 1.1);
export const ContextRouteAnimation = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 450,
    transition: {
      type: 'tween',
      ease: longTail,
      duration: 800
    }
  },
  exit: {
    x: 500,
    opacity: 0,
    transition: { duration: 300 }
  }
});
