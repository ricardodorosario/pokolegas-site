import React, { Component } from "react";

class Panel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`social-panel ${this.props.title}`}
        onClick={this.props.onClick}>
        <div className='panel-header'>
          <img
            src={this.props.imgLogo}
            className='App-img-logo'
            alt={this.props.title}
          />
          {this.props.title}
        </div>
        <div className='panel-body'>{this.props.children}</div>
      </div>
    );
  }
}

export default Panel;
