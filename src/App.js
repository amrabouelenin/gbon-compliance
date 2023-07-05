import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppMenu from "./components/Menu/Menu";
import CountryPage from "./components/CountryPage/CountryPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="level1">
      <Header />
      <AppMenu />
      <main className="app-content">
        {/* <Router /> */}
        <CountryPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
