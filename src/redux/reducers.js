// src/redux/reducers.js

const initialState = {
    pokemons: [],
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POKEMONS':
        return {
          ...state,
          pokemons: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  