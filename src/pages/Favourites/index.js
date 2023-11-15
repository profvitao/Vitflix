import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Favourites.module.css";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favourites";
import ScrollToTheTop from "../../components/ScrollToTheTop";
function Favourites() {
  const { favorites } = useFavoriteContext();
  return (
    <>
      <ScrollToTheTop />
      <section className={styles.container}>
        <Header />
        <Container>
          <h2>Meus Favoritos</h2>
          {
            <VideoList
              videos={favorites}
              emptyHeading={"Você não tem nenhum video favorito."}
            />
          }
        </Container>
        <Footer />
      </section>
    </>
  );
}
export default Favourites;
