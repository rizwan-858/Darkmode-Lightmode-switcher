// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  darkMode = () => {
    this.setState(() => ({isDarkMode: false}))
  }

  lightMode = () => {
    this.setState(() => ({isDarkMode: true}))
  }

  render() {
    const {isDarkMode} = this.state
    return (
      <div className="bg">
        {isDarkMode ? (
          <div className="light-bg">
            <h1 className="light-bg-heading">click to change Mode</h1>
            <button type="button" onClick={this.darkMode} className="btn">
              Dark Mode
            </button>
          </div>
        ) : (
          <div className="dark-bg">
            <h1 className="dark-bg-heading">click to change Mode</h1>
            <button type="button" onClick={this.lightMode} className="btn">
              Light Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
