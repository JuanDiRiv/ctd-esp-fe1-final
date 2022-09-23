import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";


export interface AgregarFavoritoAction extends Action {
  type: "AGREGAR_FAVORITO";
  personaje: Personaje;
}

export interface EliminarFavoritoAction extends Action {
  type: "ELIMINAR_FAVORITO";
  personaje: Personaje;
}

export interface EliminarTodosLosFavoritosAction extends Action {
  type: "ELIMINAR_TODOS_LOS_FAVORITOS";
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (
  personaje: Personaje
) => {
  return {
    type: "AGREGAR_FAVORITO",
    personaje,
  };
};

export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (
  personaje: Personaje
) => {
  return {
    type: "ELIMINAR_FAVORITO",
    personaje,
  };
};

export const eliminarTodosLosFavoritos: ActionCreator<
  EliminarTodosLosFavoritosAction
> = () => {
  return {
    type: "ELIMINAR_TODOS_LOS_FAVORITOS",
  };
};

export type FavoritosAction =
  | AgregarFavoritoAction
  | EliminarFavoritoAction
  | EliminarTodosLosFavoritosAction;
