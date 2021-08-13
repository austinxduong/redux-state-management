import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';

const Home = () => {
  return <h1>Home page</h1>;
};

const About = () => {
  const { Name } = useParams();
  return <h1>About page {Name} </h1>;
};

export default function App() {
  return (
    <>
      <CharacterList />
    </>
  );
}
