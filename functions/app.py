import os
import requests
from flask import Flask, jsonify

app = Flask(__name__)

ODDS_API_URL = "https://api.the-odds-api.com/v4/sports/upcoming/odds/"
API_KEY = "4cec1b1d9bb8fb68989cbf40eec04b5b"

@app.route('/upcoming-events', methods=['GET'])
def get_upcoming_events():
    params = {
        'regions': 'us',
        'markets': 'h2h',
        'oddsFormat': 'american',
        'apiKey': API_KEY
    }
    response = requests.get(ODDS_API_URL, params=params)
    events = response.json()
    return jsonify(events)

@app.route('/best-bets', methods=['GET'])
def get_best_bets():
    response = requests.get(ODDS_API_URL, params={'regions': 'us', 'markets': 'h2h', 'oddsFormat': 'american', 'apiKey': API_KEY})
    events = response.json()
    best_bets = sorted(events, key=lambda x: x['bookmakers'][0]['markets'][0]['outcomes'][0]['price'])[:5]
    return jsonify(best_bets)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
