import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import FavouritesProvider from "./contexts/Favourites";
import CadastroVideo from "./pages/CadastroVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavouritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/cadastre" element={<CadastroVideo />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </FavouritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
