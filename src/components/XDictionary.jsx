import React, { useState } from "react";

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

export default function XDictionary() {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      setDefinition(null);
      setNotFound(false);
      return;
    }

    const foundEntry = dictionary.find(
      (entry) => entry.word.toLowerCase() === search
    );

    if (foundEntry) {
      setDefinition(foundEntry.meaning);
      setNotFound(false);
    } else {
      setDefinition(null);
      setNotFound(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDefinition(null);
    setNotFound(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Enter word to search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Search word"
        data-cy="search-input"
        style={{ width: "70%", padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={handleSearch}
        aria-label="Search dictionary for entered word"
        data-cy="search-button"
        style={{ padding: "8px 16px", marginLeft: 8, fontSize: "16px" }}
      >
        Search
      </button>

      <div style={{ marginTop: 20 }}>
        <h3>Definition:</h3>
        <p>
          {definition
            ? definition
            : notFound
            ? "Word not found in the dictionary."
            : ""}
        </p>
      </div>
    </div>
  );
}
