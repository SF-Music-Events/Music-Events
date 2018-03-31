import React from 'react';
import NavBar from './NavBar';
import EventList from './EventList';
import Data from '../scrapedData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: Data
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <EventList events={Data.events} />
      </div>
    );
  }
}

export default App;
