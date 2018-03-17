/* eslint react/prop-types: 0 */
import React from 'react';
import EventListing from './EventListing';
import data from '../scrapedData.json';

const EventList = () => <div>{data.events.slice(0, 6).map(event => <EventListing event={event} />)}</div>;

export default EventList;
