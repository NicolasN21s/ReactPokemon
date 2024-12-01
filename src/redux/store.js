// src/redux/store.js
import { createStore } from 'redux';
import pokemonReducer from './reducers'; // Asegúrate de que la ruta sea correcta

const store = createStore(pokemonReducer); // O combineReducers si tienes múltiples reducers

export default store;
