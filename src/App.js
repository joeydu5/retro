import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import RetroRecords from "./pages/RetroRecords";
import RareLps from "./pages/RareLps";
import UsedRecords from "./pages/UsedRecords";
import Contact from "./pages/Contact";
import Navigation from "./components/navi/Navigation";
import Footer from "./components/footer/Footer";
import MobileNav from "./components/navi/MobileNav";

function App() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const navbarHandler = () => {
    setNavbarToggle(!navbarToggle);
  };
  return (
    <Router>
      <Navigation navbarHandler={navbarHandler} />
      <MobileNav navbarToggle={navbarToggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/retrorecords" component={RetroRecords} />
        <Route path="/rarelps" component={RareLps} />
        <Route path="/usedrecords" component={UsedRecords} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/contact" component={MobileNav} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
