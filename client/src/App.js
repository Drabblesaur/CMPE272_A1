import React, { useState } from "react";

function App() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWords = () => {
    setLoading(true);
    // Replace these with your actual URLs
    const hello_url = process.env.REACT_APP_HSERV;
    const world_url = process.env.REACT_APP_WSERV;

    // Fetch word from helloService
    fetch(hello_url)
      .then((response) => response.text())
      .then((data) => {
        setWord1(data);
        console.log("Retrieved res from helloService", data);
      })
      .catch((error) => console.error("Error fetching word1:", error));

    // Fetch word from worldService
    fetch(world_url)
      .then((response) => response.text())
      .then((data) => {
        setWord2(data);
        console.log("Retrieved res from worldService", data);
      })
      .catch((error) => console.error("Error fetching word2:", error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>CMPE 272 Assignment 1</h1>
      <button onClick={fetchWords} disabled={loading}>
        {loading ? "Loading..." : "Test Microservices"}
      </button>
      <p>
        {word1} {word2}
      </p>
    </div>
  );
}

export default App;
