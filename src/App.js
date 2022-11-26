import React from 'react'
import './App.css';
import Pokedex from './Pokedex'
import PokemonChars from "./PokemonChars"



function App() {
  return (
    <div className='App'>
        <header className="App-header">Pokedex</header>
        <Pokedex chars={PokemonChars}/>
    </div>
  );
}

export default App;
