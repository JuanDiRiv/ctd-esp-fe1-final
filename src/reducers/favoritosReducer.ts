import { Reducer } from "@reduxjs/toolkit";
import { FavoritosAction } from "../actions/favoritosActions";
import Personaje from "../types/personaje.types";

export interface FavoritosState {
  favoritos: Personaje[];
}

const initialState: FavoritosState = {
  favoritos: [],
};

const favReducer: Reducer<FavoritosState, FavoritosAction> = (
  state = initialState,
  action
): FavoritosState => {
  switch (action.type) {
    case "AGREGAR_FAVORITO":
      return {
        ...state,
        favoritos: [...state.favoritos, action.personaje],
      };
    case "ELIMINAR_FAVORITO":
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (favorito: Personaje) => favorito.id !== action.personaje.id
        ),
      };
    case "ELIMINAR_TODOS_LOS_FAVORITOS":
      return {
        ...state,
        favoritos: [],
      };
    default:
      return state;
  }
};

export default favReducer;
