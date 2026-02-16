import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;