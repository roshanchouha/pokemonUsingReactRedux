import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/Pockemons';
import { Link } from 'react-router-dom';

const AddPockemon = () => {
  const dispatch = useDispatch();
   
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setName('');
    setBreed('');
    setDescription('');
    setType('');
     
  };

  const pokemonArray = useSelector(state => state.pockemonList.pokemonsList)
  console.log("pokemonsp",pokemonArray)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && breed && description) {
       dispatch(actions.addPockemons({ name, breed, description ,type }))
      clearForm();
    }
    alert("Pockemon Added")
  };

 

  return (
     <div className='bodyContainer'>
         <div >
            <img className='logo' src="../../images/loaders.png" alt="logo"  width="100px" height="100px"/>
         </div>
        <div className="container">
      <form id="contact" onSubmit={handleSubmit}>
        <h3>Add Pockemon</h3>
       
        <fieldset>
          <input
            name="name"
            placeholder="Pokemon Name"
            type="text"
            tabIndex="1"
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            name="breed"
            placeholder="Pockmon Breed"
            type="text"
            tabIndex="2"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <input
            name="type"
            placeholder="Pokemon Type"
            type="text"
            tabIndex="3"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            
          />
        </fieldset>
        
        <fieldset>
          <textarea
            name="description"
            placeholder="Pockemon description..."
            tabIndex="5"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset style={{display:'flex',justifyContent:'space-between'}}>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
             Submit
          </button>
           <div>
           <Link to='/'> 
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
               Home
            </button>
          </Link>
           </div>
        </fieldset>
      </form>
    </div>
     </div>
  );
};

export default AddPockemon;
