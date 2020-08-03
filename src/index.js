import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  ReactDOM.render(
    <Fragment>
      <Landing />
    </Fragment>,
    root
  );

})