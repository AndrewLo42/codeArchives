import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class AppCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      moveSlide: false
    };
    // this.handleScroll = this.handleScroll.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('wheel', e => this.handleScroll(e.wheelDelta));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('wheel', this.handleScroll);
  // }

  // handleScroll(y) {

  //   if (y > 0 && this.state.moveSlide === false) {
  //     this.setState({
  //       value: this.state.value + 1,
  //       moveSlide: true
  //     }, () => {
  //       this.pauseScroll();
  //     });
  //   } else if (y < 0 && this.state.moveSlide === false) {
  //     this.setState({
  //       value: this.state.value - 1,
  //       moveSlide: true
  //     }, () => {
  //       this.pauseScroll();
  //     });
  //   }

  // }

  // pauseScroll() {
  //   window.removeEventListener('wheel', this.handleScroll);
  //   setTimeout(() => this.startScrollListener(), 2000);
  // }

  // startScrollListener() {
  //   window.addEventListener('wheel', e => this.handleScroll(e.wheelDelta));
  //   this.setState({ moveSlide: false });
  // }

  // onChange(value) {
  //   this.setState({ value });
  // }

  render() {
    return (
      <div className="pt-5 ">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={80}
          totalSlides={6}
          visibleSlides={2}
          step={2}
          dragStep={2}
          isIntrinsicHeight={true}
          // orientation="vertical"
          infinite
        >
          <Slider className="mt-4 p-1 cara-slides">
            <Slide index={0} innerClassName="card app-card" className="">
              <img className="cardImg mx-auto" src="./images/shadowrealmer.png"></img>
              <h4>Shadow Realmer</h4>
              <h5>A meet-up app</h5>
              <img src="./images/realmer.gif" className="example-gif"></img>
            </Slide>
            <Slide innerClassName="app-description" index={1}>
              A meet up app for trading card players of all kinds; enthusiasts, casuals, and the curious who want to find games to play, find events, trade cards, or just to make new friends. Built with React and PostgreSQL, utilizing various npm packages to enhance features.
              <div className="link-btn-row mt-4 row justify-content-center">
                <a
                  href='http://shadowrealmer.com'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >Live</a>
                <a
                  href='https://github.com/AndrewLo42/shadow-realmer'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
              </div>
            </Slide>
            <Slide index={2} innerClassName="card app-card" className="cara-slides">
              <img className="cardImg mx-auto" src="./images/minpedal.png"></img>
              <h4>Wicked Pedals</h4>
              <h5>An e-commerce app</h5>
              <img src="./images/wp.gif" className="example-gif"></img>
            </Slide>
            <Slide innerClassName="app-description" index={3}>
              Full-stack e-commerce experience for guitar pedals and pedal supplies. Built with React and PostgreSQL
              <div className="link-btn-row mt-4 row justify-content-center">
                <a
                  href='http://wicked-pedals.andrewclo.com'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >Live</a>
                <a
                  href='https://github.com/AndrewLo42/wicked-pedals'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
              </div>
            </Slide>
            <Slide index={4} innerClassName="card app-card" className="cara-slides">
              <img className="cardImg mx-auto" src="./images/mmfavicon.png"></img>
              <h4>Exodia Exodus</h4>
              <h5>A matching game</h5>
              <img src="./images/mm.gif" className="example-gif"></img>
            </Slide>
            <Slide innerClassName="app-description" index={5}>
              A JavaScript memory matching application based on the popular card game, Yu-Gi-Oh. Users have to match 5 pairs before the Computer player!
              <div className="link-btn-row mt-4 row justify-content-center">
                <a
                  href='http://exodia-exodus.andrewclo.com'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >Live</a>
                <a
                  href='https://github.com/AndrewLo42/yu-gi-oh-memory-match'
                  className="app-btn btn btn-default decoration-none default-nav pointer mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub</a>
              </div>
            </Slide>

          </Slider>
          <div className="slider-nav justify-content-between d-flex">
            <ButtonBack className='shine cara-nav-btn left-btn'>Back</ButtonBack>
            <div>
              <Dot className="shine slide-thumbnail realm-thumb" slide={0}></Dot>
              <Dot className="shine slide-thumbnail pedal-thumb" slide={2}></Dot>
              <Dot className="shine slide-thumbnail exodia-thumb" slide={4}></Dot>
            </div>
            <ButtonNext className='shine cara-nav-btn right-btn'>Next</ButtonNext>

          </div>

        </CarouselProvider>
      </div>
    );
  }
}

export default AppCarousel;
