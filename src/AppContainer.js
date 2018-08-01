import { connect } from "react-redux";

import { App } from "./App";
import { newComic } from "./App";

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  comic: state.comic
});

const mapDispatchToProps = {
  newComic
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
