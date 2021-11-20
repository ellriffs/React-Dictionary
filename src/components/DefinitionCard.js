import React from 'react';
import '../Styles/defcard.css';

const DefinitionCard = ({
  audio,
  phonetics,
  partOfSpeech,
  mainWord,
  origin,
  defs,
}) => {
  return (
    <div className="defcard-container">
      <h2>Word</h2>
      <div className="Definition_Cards_word">{mainWord}</div>
      <h2>Origin</h2>
      <div className="Definition_Cards_origin">{origin}</div>
      <h2>Part of Speech</h2>
      <div className="Definition_Cards_partOfSpeech">{partOfSpeech}</div>
      <h2>Phonetics</h2>
      <div className="Definition_Cards_phonetics">{phonetics}</div>
      <h2>Definition</h2>
      <div className="Definition_Cards_definition">{defs}</div>
      <div className="Definition_Cards_audio">
        <a target="#" href={audio}>
          CLICK HERE TO HEAR PRONNUNCIATION
        </a>
      </div>
    </div>
  );
};

export default DefinitionCard;
