import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import City from './components/City';
import Nav from './components/Nav';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
import History from './components/History';
import Myth from './components/Myth';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/" component={City} />
          <Route exact path="/history" component={History} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/myth" component={Myth} />
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
