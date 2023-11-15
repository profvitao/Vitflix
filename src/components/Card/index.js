import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import favoriteIcon from "./favorite.png";
import unfavoriteIcon from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favourites";
function Card({ id }) {
  const { favorites, addFavorite } = useFavoriteContext();
  const isFavorite = favorites.some((fav) => fav.id === id);
  const icone = !isFavorite ? favoriteIcon : unfavoriteIcon;

  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
        />
      </Link>
      <figure className={styles.icon}>
        <img src={icone} alt="Favoritar" onClick={() => addFavorite({ id })} />
      </figure>
    </section>
  );
}

export default Card;
