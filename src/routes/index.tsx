import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from '../components/Main';
import Users from '../components/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/users" component={Users} />
    </BrowserRouter>
  );
}
