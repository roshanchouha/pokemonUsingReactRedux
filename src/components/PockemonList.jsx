import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import * as actions from '../redux/Pockemons';
import { Link, NavLink } from 'react-router-dom';
const PockemonList = () => {
   
    const dispatch = useDispatch();
    const data = useSelector(state => state.pockemonList.pokemonsList)
    console.log("pokemonsp",data)

    const handleRemovePokemon = (nameToRemove) => {
        dispatch(actions.removePockemons(nameToRemove))
        // setPokemonList(pokemonList.filter(pokemon => pokemon.name !== nameToRemove));
      };
    

      const handleEditPokemon = (name,index) => {
        
      };
    
      return (
         <div className='bodyContainer'>
           <div >
        <img className='logo' src="../../images/loaders.png" alt="logo"  width="100px" height="100px"/>
      </div>
            <div className='homeBtn1'>
                 <Link to="/" style={{ textDecoration: 'none' }}><button className='homeClick'>Home</button></Link>
            </div>
            <div className="container1">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Name</div>
              <div className="col col-2">Breed</div>
              <div className="col col-3">Type</div>
              <div className="col col-4">Description</div>
              <div className="col col-3">Actions</div>
            </li>
            {data.map((item, index) => (
              <li className="table-row" key={index}>
                <div className="col col-1"  >{item.name}</div>
                <div className="col col-2"  >{item.breed}</div>
                <div className="col col-3"  >{item.type}</div>
                <div className="col col-4"  >{item.description}</div>
                <div className="col col-3" style={{display:"flex",justifyContent:"space-between"}} >
                    <NavLink to={`../edit/${item.name}/${index}`} >
                     <button className='edit'>
                       <CiEdit  />
                     </button>
                   </NavLink>
                     
                    <button className='delete' onClick={() => handleRemovePokemon(item.name)}>
                      <MdDeleteOutline />
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
         </div>
      
  )
}

export default PockemonList
