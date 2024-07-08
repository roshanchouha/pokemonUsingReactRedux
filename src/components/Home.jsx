import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/Pockemons"
import { addPockemons } from '../redux/Pockemons';


const Home = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentPokemon] = useState({});
  const dispatch = useDispatch();

  const clearForm = () => {
    setName('');
    setBreed('');
    setDescription('');
    setEditing(false);
    setCurrentPokemon(null);
  };

  const pokemonArray = useSelector(state => state.pockemonList.pokemonsList)
  console.log("pokemonsp",pokemonArray)

  const handleAddPokemon = () => {
    if (name && breed && description) {
       dispatch(actions.addPockemons({ name, breed, description }))
      clearForm();
    }
  };

  const handleRemovePokemon = (nameToRemove) => {
    dispatch(actions.removePockemons(nameToRemove))
    // setPokemonList(pokemonList.filter(pokemon => pokemon.name !== nameToRemove));
  };

  const handleEditPokemon = (pokemon,index) => {
    setEditing(true);
    setCurrentPokemon(index);
    setName(pokemon.name);
    setBreed(pokemon.breed);
    setDescription(pokemon.description);
  };

  const handleUpdatePokemon = () => {
    
    if (name && breed && description) {
      dispatch(actions.editPockemons({ index: currentIndex, name, breed, description }));
      clearForm();
    }
  };

  return (
    <div className="app">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {editing ? (
        <button onClick={handleUpdatePokemon}>Update Pokemon</button>
      ) : (
        <button onClick={handleAddPokemon}>Add Pokemon</button>
      )}
      <ul>
        {pokemonArray.map((pokemon,index) => (
          <li key={index}>
           <strong>Name:</strong> {pokemon.name}, <strong>Breed:</strong> {pokemon.breed}, <strong>Description:</strong> {pokemon.description}
           <button onClick={() => handleEditPokemon(pokemon,index)}>Edit</button>
           <button onClick={() => handleRemovePokemon(pokemon.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
