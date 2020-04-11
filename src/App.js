import React, { useState } from 'react';
import Joke from "./Joke";
import Button from "./Button";

function App() {
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <Button setJoke={setJoke} setLoading={setLoading} />
      <Joke loading={loading}>{joke}</Joke>
    </div>
  );
}

export default App;

