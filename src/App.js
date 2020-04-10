import React, { useState } from 'react';

function App() {
  const [joke, setJoke] = useState("")
  return (
    <div>
      <button onClick={e => {
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
          });
      }}>Click Me!</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;

