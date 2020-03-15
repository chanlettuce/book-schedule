import React from 'react';

import { schedules } from '../stub/schedules';
import { ScheduleTable } from './ScheduleTable';

import logo from '../images/logo.svg';
import { jst } from '../modules/utils/dateUtil';
import '../styles/App.css';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <ScheduleTable
      range={{ begin: jst('2020-01-01'), end: jst('2020-01-10') }}
      schedules={schedules}
    />
  </div>
);
