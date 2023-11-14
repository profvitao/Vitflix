import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ idVideo }) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${idVideo}`}>
        <img
          src={`https://img.youtube.com/vi/${idVideo}/mqdefault.jpg`}
          alt="Capa"
        />
      </Link>
    </section>
  );
}

export default Card;
