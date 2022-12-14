import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import Personaje from "../types/personaje.types";
import { buscarPersonajeAPI } from "../services/personaje.services";

interface buscarPersonaje {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: Personaje[];
}

export interface BuscarPersonajesAction extends Action {
  type: "BUSCAR_PERSONAJES";
}

export interface BuscarPersonajesExitoAction extends Action {
  type: "BUSCAR_PERSONAJES_SUCCESS";
  data: buscarPersonaje;
}

export interface BuscarPersonajesErrorAction extends Action {
  type: "BUSCAR_PERSONAJES_ERROR";
  error: string;
}

export interface LimpiarFiltroAction extends Action {
  type: "LIMPIAR_FILTRO";
}

export interface FiltrarPersonajesAction extends Action {
  type: "FILTRAR_PERSONAJES";
  name: string;
}


export type PersonajesAction =
  | BuscarPersonajesAction
  | BuscarPersonajesExitoAction
  | BuscarPersonajesErrorAction
  | LimpiarFiltroAction
  | FiltrarPersonajesAction;


interface BuscarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, PersonajesAction> {}

export const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = () => {
  return {
    type: "BUSCAR_PERSONAJES",
  };
};

export const filtrarPersonajes: ActionCreator<FiltrarPersonajesAction> = (
  name: string
) => {
  return {
    type: "FILTRAR_PERSONAJES",
    name: name,
  };
};

const buscarPersonajesExito: ActionCreator<BuscarPersonajesExitoAction> = (
  data: buscarPersonaje
) => {
  return {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    data: data,
  };
};

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (
  error: string
) => {
  return {
    type: "BUSCAR_PERSONAJES_ERROR",
    error: error,
  };
};

export const limpiarFiltro: ActionCreator<LimpiarFiltroAction> = () => {
  return {
    type: "LIMPIAR_FILTRO",
  };
};

const MIN_CARACTERES = 0;

export const buscarPersonajesThunk = (
  name?: string
): BuscarPersonajesThunkAction => {
  return async (dispatch) => {
    if (name && name.length < MIN_CARACTERES) {
      return null;
    }
    dispatch(buscarPersonajes());
    try {
      const personajes = await buscarPersonajeAPI(name);
      dispatch(buscarPersonajesExito(personajes));
    } catch (e) {
      dispatch(buscarPersonajesError(e));
    }
  };
};
