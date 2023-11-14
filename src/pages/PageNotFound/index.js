import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import erro404 from "./erro404.png";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.PageNotFound}>
        <h2>Ops! Conteúdo não localizado!</h2>
        <img src={erro404} alt="Logo de Página não localizada" />
      </section>
      <Footer />
    </>
  );
}
export default PageNotFound;
