//createElement gives react element that is nothing but a js object not an html element
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot((document = document.getElementById("root")));
root.render(<AppLayout />); // render converts react element(js object) to html element then put it inside DOM
