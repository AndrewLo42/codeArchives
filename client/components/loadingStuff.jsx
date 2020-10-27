import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.loadItems = this.loadItems.bind(this)
  }

  componentDidMount() {
    this.loadItems()
  }

  loadItems() {
    /* just simulating a load of more items from an api here */
    setTimeout( () => {
      let items = this.state.items.slice()
      items = items.concat(this.getItems())
      this.setState({ items: items })
    }, 1000)
  }

  handleVisit () {
    this.loadItems()
  }

  getItems() {
    let items = []
    for(var i = 0; i < 10; i++) {
      items.push({ name: 'An item', description: 'A description of an item' })
    }
    return items
  }

  renderCards() {
    const { items } = this.state
    let cardStyle = { backgroundColor: 'white', padding: '1rem', margin: '1rem' }

    const cards = items.map((item, i) => {
      return (
        <div key={i} style={cardStyle}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })
    return cards
  }

  render () {
    let containerStyle = { paddingTop: '2rem', paddingBottom: '2rem', background: 'rgb(248, 245, 236)', position: 'relative' }
    let visitStyle = { position: 'absolute', width: '100%', bottom: '10rem', height: '10rem' }

    return (
      <div style={containerStyle}>
        { this.renderCards() }
        <div className="loader" style={this.props.loaderStyle} />
        {/* <InfiniteLoader visitStyle={visitStyle} onVisited={ () => this.handleVisit() } /> */}
        <button onClick={this.loadItems}>get</button>
         <style jsx>{`
        .loader {
          margin: 20px auto;
          font-size: 5px;
          position: relative;
          border: 1.1em solid rgba(255, 255, 255, 0.2);
          border-left: 1.1em solid #ffffff;
          transform: translateZ(0);
          animation: loadAnimation 1.1s infinite linear;
        }
        .loader,
        .loader:after {
          border-radius: 50%;
          width: 10em;
          height: 10em;
        }
        @-webkit-keyframes loadAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes loadAnimation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      </div>
    )
  }
}
export default TestComponent;
