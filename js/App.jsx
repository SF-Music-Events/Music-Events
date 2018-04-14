/* eslint-plugin-disable */

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
      cities: {},
      venues: { 'Folsom 415': true },
      displayVenues: { 'Folsom 415': true }
    };

    this.filterEvents = this.filterEvents.bind(this);
    this.getVisibleFilters = this.getVisibleFilters.bind(this);
    this.filterByCity = this.filterByCity.bind(this);
    this.filterByVenue = this.filterByVenue.bind(this);
  }

  componentDidMount() {
    let { events } = this.state;
    this.setState({
      cities: this.getVisibleFilters(events, 'city'),
      venues: this.getVisibleFilters(events, 'venue'),
      displayVenues: this.getVisibleFilters(events, 'venue')
    });
  }

  filterEvents(filters, filterType) {
    let filteredEvents = this.filterByCity(filters.city);
    if (filterType === 'city') {
      this.setState({
        displayEvents: filteredEvents,
        displayVenues: this.getVisibleFilters(filteredEvents, 'venue')
      });
    } else if (filterType === 'venue') {
      if (!Object.keys(filters.venue).length) {
        this.setState({
          displayEvents: filteredEvents
        });
      } else {
        this.setState({
          displayEvents: this.filterByVenue(filteredEvents, filters.venue)
        });
      }
    }
  }

  filterByCity(cities) {
    if (!Object.keys(cities).length) {
      return this.state.events;
    }
    return this.state.events.filter(event => cities[event.city]);
  }

  filterByVenue(events, venues) {
    return events.filter(event => venues[event.venue]);
  }

  getVisibleFilters(events, type) {
    let filterObj = {};
    events.forEach(event => {
      if (!filterObj[event[type]]) {
        filterObj[event[type]] = true;
      }
    });
    return filterObj;
  }

  render() {
    return (
      <div>
        <h1 id="pageTitle">SFFF Music Events</h1>
        <br />
        <br />
        <FilterTable cities={this.state.cities} venues={this.state.displayVenues} filterEvents={this.filterEvents} />
        <br />
        <br />
        <EventList events={this.state.displayEvents} />
      </div>
    );
  }
}

export default App;
