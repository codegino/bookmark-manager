import React from "react";
import logo from "@assets/img/logo.svg";
import "@src/styles/app.css";
import "@pages/newtab/Newtab.css";

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500">
          Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using Tailwind.</h6>
      </header>
    </div>
  );
};

export default Newtab;
