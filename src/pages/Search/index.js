import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Seach.module.css";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/db.json";
import ScrollToTheTop from "../../components/ScrollToTheTop";
function Search() {
  return (
    <>
      <ScrollToTheTop />
      <Header />
      <Container>
        <section className={styles.search}>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
