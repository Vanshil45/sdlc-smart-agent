import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/todos" component={TodoList} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
