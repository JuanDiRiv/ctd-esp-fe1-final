import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { IRootState } from "../../store/store";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import React, { FC } from "react";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
/**
 * Grilla de personajes para la pagina de inicio
 * @author Juan Diego Rivero
 * @returns {JSX.Element}
 */
const GrillaPersonajes: FC = (): JSX.Element => {
  const { personajes, status } = useSelector((state) => state.personajes);

  if (status === "CARGANDO") return <div>Cargando...</div>;
  if (!personajes || personajes.length === 0)
    return <><p> NO HAY PERSONAJES CON ESE NOMBRE 😣</p></>; 

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return (
          <TarjetaPersonaje
            name={personaje.name}
            image={personaje.image}
            id={personaje.id}
            key={personaje.id}
          />
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;
