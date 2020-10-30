import React, { Component } from "react";
import pokolegas from "../images/pokolegas.jpg";
import clubedaconta from "../images/clubedaconta.jpg";
import umtour from "../images/umtour.jpg";
import matematica from "../images/matematica.png";
import rosariopaintings from "../images/rosariopaintings.jpg";

import logopokolegas from "../images/logo_pokolegas.png";
import logoclubedaconta from "../images/logoclubedaconta.png";
import logoumtour from "../images/logoumtour.png";
import logomatematica from "../images/logomatematica.png";
import logorosariopaintings from "../images/logorosariopaintings.png";

import * as appActions from "./AppActions";
import AppHeader from "./AppHeader";
import Section from "./Section";
import AppFooter from "./AppFooter";
import Panel from "./Panel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialPanelOpened: "",
      title: "",
      imgLogo: "",
    };
  }

  render() {
    return (
      <div className='App'>
        <AppHeader />
        <Section
          onClick={(e) => appActions.toggleSocialPanel(e, "pokolegas", this)}
          imgsrc={pokolegas}
          imglogo={logopokolegas}
          title='Pokolegas|Developing Ideas'
          showHeader={false}>
          <div className='pokolegas-descriptopn'>Developing Ideas</div>
        </Section>
        <Section
          onClick={(e) =>
            appActions.toggleSocialPanel(e, "rosariopaintings", this)
          }
          imgsrc={rosariopaintings}
          imglogo={logorosariopaintings}
          title='Rosario Paintings'
          showHeader={true}
        />
        <Section
          onClick={(e) => appActions.toggleSocialPanel(e, "clubedaconta", this)}
          imgsrc={clubedaconta}
          imglogo={logoclubedaconta}
          title='Clube da Conta'
          showHeader={true}
        />
        <Section
          onClick={(e) => appActions.toggleSocialPanel(e, "umtour", this)}
          imgsrc={umtour}
          imglogo={logoumtour}
          title='Umtour'
          showHeader={true}
        />
        <Section
          onClick={(e) => appActions.toggleSocialPanel(e, "matematica", this)}
          imgsrc={matematica}
          imglogo={logomatematica}
          title='Matemática'
          showHeader={true}
        />
        <AppFooter />
        {this.state.socialPanelOpened !== "" && (
          <Panel
            title={this.state.title}
            imgLogo={this.state.imgLogo}
            onClick={() =>
              appActions.toggleSocialPanel(
                null,
                this.state.socialPanelOpened,
                this
              )
            }
          />
        )}
      </div>
    );
  }
}

export default App;
