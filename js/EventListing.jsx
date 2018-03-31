/* eslint react/prop-types: 0 */
import React from 'react';

const EventListing = props => (
  <div>
    <div>{props.event.title}</div>
    <div>city: {props.event.city}</div>
    <div>venue: {props.event.venue}</div>
    <div>date: {props.event.date}</div>
    <div>time: {props.event.time}</div>
    <br />
  </div>
);

export default EventListing;
