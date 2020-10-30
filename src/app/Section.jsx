import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section onClick={this.props.onClick}>
        <div className={this.props.showHeader ? "section-header" : "hide"}>
          <img
            src={this.props.imglogo}
            className='App-img-logo'
            alt={this.props.title}
          />

          {this.props.title}
        </div>

        <div className='section-body'>
          <img
            src={this.props.imgsrc}
            className='App-img-section'
            alt={this.props.title}
          />
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
