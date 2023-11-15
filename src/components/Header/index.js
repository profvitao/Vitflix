import { Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>VitFlix</span>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Buscar</Link>
        <Link to="/favourites">Favoritos</Link>
        <Link to="/cadastre">Cadastrar</Link>
      </nav>
    </header>
  );
}

export default Header;
