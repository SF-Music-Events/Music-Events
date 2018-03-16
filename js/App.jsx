import React from 'react';
import preload from '../data.json';
import NavBar from './NavBar';
import EventList from './EventList';

const App = () => (
  <div>
    <NavBar />
    <EventList events={preload.events} />
  </div>
);

export default App;
