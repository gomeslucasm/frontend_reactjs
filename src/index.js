import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Animals from "./Pages/Animals";
import Teste from "./Pages/Teste";
import AddAnimal from "./Pages/AddAnimal";
import Adoption from "./Pages/Adoption";
/* import store from './Store/store' */
import { Provider } from "react-redux";
import store from "./Store/store";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <Route path="/" exact component={HomePage} />
        <Route path="/animais/" exact component={Animals} />
        <Route path="/teste/" exact component={Teste} />
        {/* <Route excat path="/login/" component={Login} /> */}
        <Route path="/registrar/animal/" exact component={AddAnimal} />
        <Route path="/registrar/adocao/" exact component={Adoption} />
      </Provider>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
