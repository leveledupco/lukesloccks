import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://YOUR_FIREBASE_FUNCTION_URL/upcoming-events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.home_team} vs {event.away_team} - Odds: {event.bookmakers[0].markets[0].outcomes[0].price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
