import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestBets = () => {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    axios.get('https://lukes-locks--lukeslocks-e329b.us-central1.hosted.app/best-bets')
      .then(response => setBets(response.data))
      .catch(error => console.error('Error fetching best bets:', error));
  }, []);

  return (
    <div>
      <h1>Best Bets of the Day</h1>
      <ul>
        {bets.map((bet, index) => (
          <li key={index}>
            {bet.home_team} vs {bet.away_team} - Odds: {bet.bookmakers[0].markets[0].outcomes[0].price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestBets;
