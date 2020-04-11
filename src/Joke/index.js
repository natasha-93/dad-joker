import React from "react";
import styles from "./styles.module.css";

function Joke({ loading, children }) {
  return (
    <p className={styles.joke}>{loading ? "Loading..." : children}</p>
  )
}

export default Joke;