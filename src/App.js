import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let comand1 = 0;
  let comand2 = 0;
  let operation = "";

  const getComand = (cmd) => {
    if (comand1 === 0) comand1 = cmd;
    else comand2 = cmd;
  };

  const getOperation = (ope) => {
    operation = ope;
  };

  const result = () => {
    let result = 0;
    if (operation === "suma") result = comand1 + comand2;
    else if (operation === "resta") result = comand1 - comand2;
    alert("El resultado es: " + result);
    comand1 = 0;
    comand2 = 0;
    operation = "";
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
      </header>
      <div className="container">
        <div className="row">
          <div
            className="column"
            onClick={() => {
              getComand(7);
            }}
          >
            7
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(8);
            }}
          >
            8
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(9);
            }}
          >
            9
          </div>
          <div
            className="column"
            onClick={() => {
              getOperation("suma");
            }}
          >
            +
          </div>
          <div
            className="column"
            onClick={() => {
              getOperation("resta");
            }}
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              getComand(4);
            }}
          >
            4
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(5);
            }}
          >
            5
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(6);
            }}
          >
            6
          </div>
          <div className="column">/</div>
          <div className="column">*</div>
        </div>
        <div className="row">
          <div
            className="column"
            onClick={() => {
              getComand(1);
            }}
          >
            1
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(2);
            }}
          >
            2
          </div>
          <div
            className="column"
            onClick={() => {
              getComand(3);
            }}
          >
            3
          </div>
          <div
            className="column"
            id="equal"
            onClick={() => {
              result();
            }}
          >
            =
          </div>
          <div className="column" />
        </div>
        <div className="row">
          <div className="column">0</div>
          <div className="column">00</div>
          <div className="column">.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
