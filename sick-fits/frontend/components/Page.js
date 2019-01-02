import React from "react";
import Header from "./Header";
import Meta from './Meta';

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Meta></Meta>
        <Header></Header>
        {this.props.children}
        <footer>This is the bottom footer</footer>
      </React.Fragment>
    )
  }
}