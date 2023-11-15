import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ScrollToTheTop from "../../components/ScrollToTheTop";
import Container from "../../components/Container";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import Card from "../../components/Card";

import Carousel from "../../components/Carousel";
function Home() {
  return (
    <>
      <ScrollToTheTop />
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
