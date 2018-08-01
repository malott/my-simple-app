import { applyMiddleware, combineReducers, createStore } from "redux";
var mysql = require("mysql");

// actions.js
export const getComic = () => ({
  type: "ACTIVATE_COMIC",
  comic
});

export function newComic() {
  return {
    type: "comic",
    payload: "https://imgs.xkcd.com/comics/defensive_profile_2x.png"
  };
}

// reducers.js
export const comic = (state = {}, action) => {
  //return "https://imgs.xkcd.com/comics/heat_index_2x.png";
  return action.payload
    ? action.payload
    : "https://imgs.xkcd.com/comics/heat_index_2x.png";
};

export const reducers = combineReducers({
  comic
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
