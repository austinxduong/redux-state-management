import React from 'react';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={character.Name}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
