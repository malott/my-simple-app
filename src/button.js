import React, { Component } from "react";

import { connect } from "react-redux";

import { newComic } from "./redux";

// App.js
export class newComicButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.newComic()}>new comic</button>
      </div>
    );
  }
}

// ButtonContainer.js
const mapStateToProps = (state, ownProps) => ({
  comic: state.comic
});

const mapDispatchToProps = {
  newComic
};

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(newComicButton);

export default ButtonContainer;
