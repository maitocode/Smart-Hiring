import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import {
  getToken,
  // removeUserLocal,
  // setUserLocal,
  getLanguage
} from "core/localStore";
import { useTranslation } from "react-i18next";
import "plugins/react-i18n.js";
// import Toast from "components/Toast";
import { routeConfig, RouteWithSubRoutes } from "router/config";
import Error from "pages/Error/Error";
import HomePage from "./pages/User/HomePage/HomePage";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
    const token = getToken();
    if (!token) {
      return;
    }
  }, []);

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/not-found" component={Error} />
          <Route exact path="/" component={HomePage} />
          {routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
      {/* <Toast /> */}
    </div>
  );
}

export default App;
