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
import "../stylesheets/scrollbar.css";
import '../stylesheets/lists.css';
import "../stylesheets/movie_img.css";
import "../stylesheets/mediaitem.css";
import "../stylesheets/list_form.css";
import "../stylesheets/media-index.css";
import "../stylesheets/search_result.css";
import "../stylesheets/about.css";
import "../stylesheets/main_page.css"
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
