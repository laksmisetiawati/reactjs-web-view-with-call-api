// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ASSETS
import './assets/css/main.css';

// COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

// STATIC PAGES
import HomePage from './pages/home';
import PostsPage from './pages/posts';
import UsersPage from './pages/users';
import SettingsPage from './pages/settings';

// ERROR PAGES
import Error404Page from './pages/error404';

const App = () => (
  <Router>
    <article>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/settings" component={SettingsPage} />

        <Route component={Error404Page} />
      </Switch>

      <Footer />
    </article>
  </Router>
)

export default App;
