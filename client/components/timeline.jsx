
class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.state = {
      section1Active: 'ready',
      section2Active: 'ready',
      section3Active: 'ready',
      section4Active: 'ready'
    };
  }

  componentDidMount() {
    console.log("yes");
    const section1 = this.section1.current;
    const section2 = this.section2.current;
    const section3 = this.section3.current;
    const section4 = this.section4.current;
    var options = {
      root: null,
      threshold: 0.3
    };
    var callBack = obs => {
      var target = obs[0].target;
      console.log(target)
      if (target === section1) {
        if (!obs[0].isIntersecting) return;
        this.setState({ section1Active: 'active' });
        observer.unobserve(section1);
      } else if (target === section2) {
        if (!obs[0].isIntersecting) return;
        this.setState({ section2Active: 'active' });
        console.log("yes")
        observer.unobserve(section2);
      } else if (target === section3) {
        if (!obs[0].isIntersecting) return;
        this.setState({ section3Active: 'active' });
        observer.unobserve(section3);
      } else if (target === section4) {
        if (!obs[0].isIntersecting) return;
        this.setState({ section4Active: 'active' });
        observer.unobserve(section4);
      }
    };
    var observer = new IntersectionObserver(callBack, options);
    observer.observe(section1);
    observer.observe(section2);
    observer.observe(section3);
    observer.observe(section4);
  }
  render() {
    return (
      <div class="wrapper" >

        <nav className="nav-wrapper" id="navbar-example">
          <ul className="nav">

            <li role="presentation" className="">
              <div className="nav-link" href="#section1">
                <span className="nav-counter">01</span>
                <h3 className="nav-title">Intro</h3>
                <p className="nav-body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </div>
            </li>

            <li role="presentation" className="">
              <div className={`nav-link ${this.state.section2Active}`} >
                <span className="nav-counter">02</span>
                <h3 className="nav-title">Intro</h3>
                <p className="nav-body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </div>
            </li>

            <li role="presentation" className="">
              <a href="#section3">
                <span className="nav-counter">01</span>
                <h3 className="nav-title">Intro</h3>
                <p className="nav-body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </a>
            </li>

            <li role="presentation" className="">
              <a href="#section4">
                <span className="nav-counter">04</span>
                <h3 className="nav-title">Intro</h3>
                <p className="nav-body"><strong>Timeline-style navigation</strong>. Scroll down to see what happens, or click on a number in the nav.</p>
              </a>
            </li>
          </ul>
        </nav>

        <section ref={this.section1} className="section section1" id="section1">
          Scroll down or use the nav.
    </section>

        <section ref={this.section2} className="section section2" id="section2">
          Section 2
    </section>

        <section ref={this.section3} className="section section3" id="section3">
          Section 3
    </section>

        <section ref={this.section4} className="section section4" id="section4">
          Section 4
    </section>
      </div>
    );
  }
}


export default TimeLine;
