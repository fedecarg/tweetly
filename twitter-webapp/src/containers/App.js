import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Timeline from './Timeline';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Timeline} />
          <Route exact path="/tweets/:screen_name?" component={Timeline} />
        </Switch>
      </BrowserRouter>
    </Layout>
  </Provider>
);

export default App;