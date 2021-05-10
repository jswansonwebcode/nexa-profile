import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import logo from "./img/nexa-trans-white.png";
import LoanProgramScreen from "./screens/LoanProgramScreen";
import Menu from "./components/Menu";
import PROFILE from "./.profile.js";

function App() {
  const { profile } = PROFILE;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row1">
          <div>
            <Link className="brand" to="/">
              <img className="small" src={logo} alt="logo"></img>
            </Link>
          </div>
          <div className="nonMobileNavLinks">
            <Link to="/loan-programs">Loan Programs</Link>
            <a
              href="https://nexamortgage.com/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            {profile.map((p) => (
              <a
                className="applyNowNav"
                key={p.id}
                href={p.loanLink}
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
            ))}
          </div>
          <div className="menu">
            <Menu />
          </div>
        </header>
        <main>
          <Route path="/loan-programs" component={LoanProgramScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
