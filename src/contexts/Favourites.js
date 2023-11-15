import { createContext, useContext, useState } from "react";

export const FavouritesContext = createContext();
FavouritesContext.displayName = "MyFavourites";

export default function FavouritesProvider({ children }) {
  const [favorites, setFavorite] = useState([]);

  return (
    <FavouritesContext.Provider value={{ favorites, setFavorite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

// Hook Personalizado
export function useFavoriteContext() {
  const { favorites, setFavorite } = useContext(FavouritesContext);
  function addFavorite(newFavorite) {
    //verifica se tem algum item com o id na lista
    const repeatedFavorite = favorites.some(
      (item) => item.id === newFavorite.id
    );
    let newList = [...favorites];

    //se nao se repete na lista vai incluir
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    //se tá na lista e chamou essa função entao tem q tirar
    newList = favorites.filter((fav) => fav.id !== newFavorite.id);

    return setFavorite(newList);
  }

  return {
    favorites,
    addFavorite,
  };
}
