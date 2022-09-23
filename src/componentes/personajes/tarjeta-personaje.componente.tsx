import FavButton from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import Personaje from "../../types/personaje.types";
import { useSelector } from "./grilla-personajes.componente";
import {
  agregarFavorito,
  eliminarFavorito,
} from "../../actions/favoritosActions";
import { useDispatch } from "react-redux";

/**
 * Componente que renderiza la tarjeta para cada personaje dentro de la grilla de personajes.
 * 
 * @authorJuan Diego Rivero
 * @param {Personaje} personaje
 * @returns {JSX.Element}
 */

const TarjetaPersonaje = ({ name, image, id }: Personaje): JSX.Element => {
  const dispatch = useDispatch();

  const favoritos = useSelector((state) => state.personajesFavoritos.favoritos);
  let esFavorito = favoritos.some((favorito) => favorito.id === id);

  /**
    Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
   * @author Juan Diego Rivero
   */
  const handleClick = () => {
    if (!esFavorito) {
      dispatch(agregarFavorito({ id, name, image }));
    } else {
      dispatch(eliminarFavorito({ id, name, image }));
    }
  };

  return (
    <div className="tarjeta-personaje" key={"personaje_" + id}>
      <img src={image} alt={name} />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <FavButton esFavorito={esFavorito} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
