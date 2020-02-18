import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
// import App from './App';
import Root from "/Root";
import * as serviceWorker from "../serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { default as Home } from "./pages/Home";
export { default as Mypage } from "./pages/MyPage";
export { default as SignUp } from "./pages/SignUp";
export { default as SignIn } from "./pages/SignIn";