/* eslint react/prop-types: 0 */
import React from 'react';
import EventListing from './EventListing';

const EventList = props => <div>{props.events.map(event => <EventListing event={event} />)}</div>;

export default EventList;
