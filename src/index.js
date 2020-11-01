import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Container from './components/Container';
import Home from './components/Home';
import History from './components/History';
import Myth from './components/Myth';
import Gallery from './components/Gallery';
import Forms from './components/Forms';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Myths from './components/Myths';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/myths" component={Myths} />
          <Route exact path="/myths/:id" component={Myth} />
          <Route exact path="/form" component={Forms} />
        </Switch>

      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
