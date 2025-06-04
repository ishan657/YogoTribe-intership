import React, { useState } from "react";
import "./CatFact.css";

const CatFact = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error(error);
      setFact("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="catfact-container">
      <p className="recruiter-message">
        Hlo recruiter, I'm very hard working and eager to join your internship
        and can give 40 hours/week without any problem starting tomorrow. Hoping
        for a positive response!
      </p>
      <h1>🐱 Random Cat Fact</h1>
      <button onClick={fetchCatFact} className="catfact-button">
        {loading ? "Loading..." : "Get a Cat Fact"}
      </button>
      {fact && <p className="catfact-text">{fact}</p>}
    </div>
  );
};

export default CatFact;
