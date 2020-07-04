import React from 'react';

class Background extends React.Component {
  render() {
    return (
      <div className="page" id="home">
        <section className="icon pb-2 background-content">
          <img src="./images/die20.png" className="img-fluid "></img>
          <span className="title">Andrew Lo</span>
          <span className="hint">Welcome to my site</span></section>
      </div>
    );
  }
}

export default Background;
