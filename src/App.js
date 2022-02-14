import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import { Paginas } from './data/PaginasApp';

export default function App() {
  return (
    <Router>
      <Navegacion />
      {Paginas.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
