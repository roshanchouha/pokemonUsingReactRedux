import { createSlice } from "@reduxjs/toolkit";

export const Pockemon = createSlice({
    name:'pockemon',
    initialState:{
        pokemonsList:[]
    },
    reducers:{
        addPockemons:(state,action)=>
        {
           let {name, breed, description,type} = action.payload;
           console.log("redux se",action.payload)
           state.pokemonsList.push({ name, breed, description,type });
            
        },
        removePockemons:(state,action)=>{
            console.log("redux remove",action.payload)
            state.pokemonsList = state.pokemonsList.filter(item => item.name !== action.payload)
        },
        editPockemons:(state,action)=>{
            let {name, breed, description,index,type} = action.payload;
            console.log("redux update",action.payload)
            state.pokemonsList.fill({ name, breed, description, type },index,index+1);
        }
    }
}) 
export const {addPockemons,removePockemons,editPockemons} = Pockemon.actions;
export default Pockemon.reducer;