import React from 'react';
// import { Switch, Route, useParams } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';


export default function App() {
  return (
    <>
      <Header />
      <CharacterList />
    </>
  );
}
