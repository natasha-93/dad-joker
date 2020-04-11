import React from "react";
import styles from "./styles.module.css";

function Button({ setLoading, setJoke }) {
  return (
    <div className={styles.div}>
      <button className={styles.button} onClick={e => {
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
        Another joke!</button>
    </div>
  )
}

export default Button;