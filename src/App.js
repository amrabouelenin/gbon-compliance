import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppMenu from "./components/Menu/Menu";
import CountryPage from "./components/CountryPage/CountryPage";
import Footer from "./components/Footer/Footer";
import CountryPageFilters from "./components/CountryPageFilters/CountryPageFilters";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="level1">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/gbon-compliance/country/map/:country/:resolution/:baseline/:quarter/:year"
            exact
            // render={(props) => <CountryPage params={props.match.params} />}
            element={<CountryPage/>}
          />
          <Route path="/gbon-compliance" exact element={<Home />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
      {/* <CountryPageFilters /> */}
      <main className="app-content">{/* <CountryPage /> */}</main>
      <Footer />
    </div>
  );
}

export default App;
