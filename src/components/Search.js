import React from 'react';
import DefinitionCard from './DefinitionCard';
import '../Styles/search.css';

const Search = ({ handleSearch, getSearch, definition }) => {
  return (
    <div className="search-container">
      <form className="search-form">
        <input
          onChange={handleSearch}
          className="input-value"
          placeholder="Search for a word"
        ></input>
        <button onClick={getSearch} type="button">
          Search
        </button>
        {definition.map((word) => (
          <div className="definition-card">
            <DefinitionCard
              key={word}
              mainWord={word.word.toUpperCase()}
              origin={word.origin.toUpperCase()}
              partOfSpeech={word.meanings[0].partOfSpeech.toUpperCase()}
              phonetics={word.phonetics[0].text.toUpperCase()}
              defs={word.meanings[0].definitions[0].definition.toUpperCase()}
              audio={word.phonetics[0].audio}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Search;
