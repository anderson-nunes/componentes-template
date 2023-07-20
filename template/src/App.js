import React from "react";
import "./App.css";
import Garagem from "./components/Garagem";
import Header from "./components/Header";
import Fotter from "./components/Fotter";

export default function App() {


  return (
    <div className="App">

      <Header />
      <Garagem />
      <Fotter />
    </div>
  );
}
