import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyApp from "./Chapters/Ch1-Quick-Start/App";
import Profile from "./Chapters/Ch1-Quick-Start/Profile";
import ShoppingList from "./Chapters/Ch1-Quick-Start/ShoppingList";
import MyButton from "./Chapters/Ch1-Quick-Start/MyButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="container">
      <MyApp />
      <Profile />
      <ShoppingList />
      <MyButton />
    </div>
  </React.StrictMode>
);
