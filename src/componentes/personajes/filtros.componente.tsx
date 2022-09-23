import "./filtros.css";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  buscarPersonajesThunk,
  filtrarPersonajes,
} from "../../actions/personajesActions";
import { useSelector } from "./grilla-personajes.componente";

/**
 * 
 * @author Juan Diego Rivero
 * @returns JSX.Element
 */
const Filtros: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { busqueda } = useSelector((state) => state.personajes);

  useEffect(() => {
    dispatch(buscarPersonajesThunk());
  }, []);

  /**
   * 
   * @param {Event} e
   */
  const handlerChange = (e: any) => {
    dispatch(buscarPersonajesThunk(e.target.value));
    dispatch(filtrarPersonajes(e.target.value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        value={busqueda}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={(e) => handlerChange(e)}
      />
    </div>
  );
};

export default Filtros;
