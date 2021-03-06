import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Character';
import styles from './CharacterList.css';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={characters.name}>
      <Character {...character} />
    </li>
  ));

  return <ul className={styles.CharacterList}>{characterElements}</ul>;
};

export default CharacterList;
