import React, { useState } from 'react';

function App() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <button onClick={e => {
        setLoading(true)
        fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setJoke(data.joke)
            setLoading(false)
          });
      }}>
        Click Me!</button>
      <p>{loading ? "loading" : joke}</p>
    </div>
  );
}

export default App;

