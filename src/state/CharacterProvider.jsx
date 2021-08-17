/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchAllCharacters } from '../services/fetchApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters().then(setCharacters);
  }, []);


  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>

  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

