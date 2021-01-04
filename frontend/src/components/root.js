import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";

import "../stylesheets/reset.css";
import "../stylesheets/splash.css";
import "../stylesheets/sign.css";
import "../stylesheets/navbar.css";
import "../stylesheets/moviePage.css";
import "../stylesheets/profile-navbar.css";
import "../stylesheets/profile.css";
import "../stylesheets/profile-page.css";
import "../stylesheets/comment.css";
import "../stylesheets/loading.css";
import "../stylesheets/movie_img.css";
import "../stylesheets/mediaitem.css"

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};
export default Root;
