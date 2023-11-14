import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category";
import Card from "../../components/Card";
import { useState } from "react";
import Carousel from "../../components/Carousel";
function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => (
                <Card idVideo={video.id} key={video.id} />
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
