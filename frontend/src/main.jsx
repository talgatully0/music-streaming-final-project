import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tracks').then((response) => {
      setTracks(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Tracks</h1>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>{track.title} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);