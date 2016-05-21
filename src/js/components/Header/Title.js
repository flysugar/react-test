import React from "react";

      // <h1>{this.props.title}</h1>

export default class Title extends React.Component {
  render() {
    return (
    	<h2>Header/Title.js: {this.props.title}</h2>
    );
  }
}