import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="logo-container">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="heading-container">
            <h1>Logo</h1>
          </div>
          <div className="icons-container">
            <i className="fa-solid fa-magnifying-glass icon" />
            <i className="fa-regular fa-heart icon" />
            <i className="fa-solid fa-bag-shopping icon" />
            <i className="fa-regular fa-user icon" />
          </div>
        </div>
        <div className="nav-container-1">
          <h2 className="heading-1">SHOP</h2>
          <h2 className="heading-1">SKILLS</h2>
          <h2 className="heading-1">STORIES</h2>
          <h2 className="heading-1">ABOUT</h2>
          <h2 className="heading-1">CONTACT US</h2>
        </div>
        <hr />
        <div className="container">
          <p className="paragraph-1">DISCOVER OUR PRODUCTS</p>
          <p className="paragraph-2">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <hr />
        <div className="container-2">
          <div className="container-2">
            <p className="heading-1">100 ITEMS</p>
            <p>HIDE FILTER</p>
          </div>
          <div>
            <p>RECOMMENDED</p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default App
