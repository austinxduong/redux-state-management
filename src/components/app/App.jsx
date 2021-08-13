import React from 'react';
import { SwitchCase, Route } from 'react-router-dom';
import CharacterList from '../characters/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CharacterList} />
    </Switch>
  )
};
