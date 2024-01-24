import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppMenu from "./components/Menu/Menu";
import CountryPage from "./components/CountryPage/CountryPage";
import Footer from "./components/Footer/Footer";
import CountryPageFilters from "./components/CountryPageFilters/CountryPageFilters";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="level1">
      <Header />
      <Router>
        <Switch>
          <Route
            path="/gbon-compliance/country/map/:country/:resolution/:baseline/:quarter/:year"
            exact
            render={(props) => <CountryPage params={props.match.params} />}
          />
          <Route path="/gbon-compliance" exact component={Home} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
      {/* <CountryPageFilters /> */}
      <main className="app-content">{/* <CountryPage /> */}</main>
      <Footer />
    </div>
  );
}

export default App;
