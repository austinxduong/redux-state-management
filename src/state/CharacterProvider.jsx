/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllCharacters } from '../services/fetchApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('futurama');

  const apiMap = {
    futurama: fetchAllCharacters,
  };

  useEffect(() => {
    apiMap[selectedApi]().then(setCharacters);
  }, [selectedApi]);


  return (
    <CharacterContext.Provider value={{ characters, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>

  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};

export const useAvailableAPIs = () => {
  const { apiMap } = useContext(CharacterContext);
  return Object.keys(apiMap);
};


