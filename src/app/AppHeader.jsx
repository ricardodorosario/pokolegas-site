import React, { Component } from "react";
import logo from "../images/logo_pokolegas.png";

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='Pokolegas|Developing Ideas' />
        <p>okolegas</p>
      </header>
    );
  }
}

export default AppHeader;
