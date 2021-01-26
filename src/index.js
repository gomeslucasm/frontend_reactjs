import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login'
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Animals from './Pages/Animals';
import Teste from './Pages/Teste';
import AddAnimal from './Pages/AddAnimal';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component = {HomePage} /> 
      <Route exact path = '/animais/' component = {Animals} />
      <Route exact path = '/teste/' component = {Teste} />
      <Route exct path = '/login/' component = {Login} />
      <Route exct path = '/adicionar/animal/' component = {AddAnimal} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
