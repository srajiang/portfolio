import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

import GlobalStyle from "./globalStyles"; // css reset

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(
    <Fragment>
      <GlobalStyle />
      <Landing />
    </Fragment>,
    root
  );

})