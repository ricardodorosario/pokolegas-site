import React, { Component } from "react";
import logo from "./style/logo_pokolegas.png";
import pokolegas from "./images/pokolegas.jpg";
import clubedaconta from "./images/clubedaconta.jpg";
import umtour from "./images/umtour.jpg";
import matematica from "./images/matematica.png";
import rosariopaintings from "./images/rosariopaintings.jpg";
import * as appActions from "./AppActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialPanelOpened: "",
    };
    this.showSocialPanel = this.showSocialPanel.bind(this);
  }

  showSocialPanel() {
    return (
      <div
        className={`social-panel ${this.state.socialPanelOpened}`}
        onClick={() =>
          appActions.toggleSocialPanel(this.state.socialPanelOpened, this)
        }>
        SocialPanel: {this.state.socialPanelOpened}
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img
            src={logo}
            className='App-logo'
            alt='Pokolegas|Developing Ideas'
          />
          <p>okolegas</p>
        </header>
        <section
          onClick={() => appActions.toggleSocialPanel("pokolegas", this)}>
          <img
            src={pokolegas}
            className='App-img-section'
            alt='Pokolegas|Developing Ideas'
          />
        </section>
        <section
          onClick={() =>
            appActions.toggleSocialPanel("rosariopaintings", this)
          }>
          <img
            src={rosariopaintings}
            className='App-img-section'
            alt='Rosario Paintings'
          />
        </section>
        <section
          onClick={() => appActions.toggleSocialPanel("clubedaconta", this)}>
          <img
            src={clubedaconta}
            className='App-img-section'
            alt='Clube da Conta'
          />
        </section>
        <section onClick={() => appActions.toggleSocialPanel("umtour", this)}>
          <img src={umtour} className='App-img-section' alt='Umtour' />
        </section>
        <section
          onClick={() => appActions.toggleSocialPanel("matematica", this)}>
          <img src={matematica} className='App-img-section' alt='Matemática' />
        </section>
        <footer className='App-footer'></footer>
        {this.state.socialPanelOpened !== "" && this.showSocialPanel()}
      </div>
    );
  }
}

export default App;
