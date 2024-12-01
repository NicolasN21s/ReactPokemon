// src/redux/actions.js

// Acción para el login
export const login = (userData) => {
    return {
      type: 'LOGIN', // Tipo de acción
      payload: userData, // Datos del usuario
    };
  };
  
  // Acción para logout
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  // Otra acción de ejemplo
  export const fetchPokemons = (pokemons) => {
    return {
      type: 'FETCH_POKEMONS',
      payload: pokemons,
    };
  };
  