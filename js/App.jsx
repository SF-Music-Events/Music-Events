import React from 'react';
import EventList from './EventList';
import Data from '../scrapedData.json';
import FilterTable from './FilterTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: Data.events,
      displayEvents: Data.events,
      clickedCity: ' the Bay Area',
      venueSearched: ''
    };

    this.filterEvents = this.filterEvents.bind(this);
    this.filterByVenue = this.filterByVenue.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  filterEvents(e) {
    let city = e.target.innerHTML;
    let filteredEvents = this.state.events.filter(event => {
      return event.city === city;
    });

    this.setState({
      displayEvents: filteredEvents,
      clickedCity: ' ' + city
    });
  }

  onChange(e) {
    this.setState({
      venueSearched: e.target.value
    });
  }

  filterByVenue(e) {
    e.preventDefault();
    console.log(this.state.venueSearched);
  }

  getUniqueTags() {
    let count = 0;
    let tags = {};

    this.state.events.forEach(event => {
      if (!tags[event.venue]) {
        tags[event.venue] = true;
        count++;
      }

      // event.tags.split(', ').forEach(tag => {
      //   if (!tags[tag]) {
      //     tags[tag] = true;
      //     count++;
      //   }
      // });
    });
    return tags;
  }

  render() {
    return (
      <div>
        <h1>SFFF Music Events</h1>
        <span onClick={this.filterEvents}>San Francisco</span>
        <span onClick={this.filterEvents}>Oakland</span>
        <span onClick={this.filterEvents}>Berkeley</span>
        <br />
        <br />
        <FilterTable />
        <form onSubmit={this.filterByVenue}>
          <span>Search by venue in {this.state.clickedCity} </span>
          <input type="textbox" placeholder="ex...Monarch" onChange={this.onChange} ref="venueSearch" />
          <button onClick={this.filterByVenue}>Search</button>
        </form>
        <br />
        <br />
        <EventList events={this.state.displayEvents} />
      </div>
    );
  }
}

export default App;
