import React from 'react';

class Hobbies extends React.Component {
  render() {
    return (
      <div className="text-center" id="t2">
        <div className="page hobbies-page" id="p2">
          <section className="pt-2 hobbies-title fas fa-gamepad"><h2 className="hobbies-main-title"> Interests </h2></section>
          <h5 className="pt-2 footer-message">Life is a crazy, mystical thing...</h5>
          <div className="container interests-container">
            <div className="row">
              <div className="hobbies-card">
                <div className="hobby-name">Super Smash Brothers</div>
              </div>
              <div className="hobbies-card">Music Production</div>
            </div>
          </div>
          <div className="col mt-4 justify-content-center ">
            <div className="mb-2 boxed-btn3 text-center" href="#">
              <div className="mt-2 smash-quote">
                <div>... and sometimes you just go out like a buster.</div>
                <div> ~ Mang0</div>
                <img className="smash-ball" src="https://img.icons8.com/ios-filled/50/000000/super-smash-bros.png">
                </img>
              </div>
            </div>
            <div className="hover-me"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
