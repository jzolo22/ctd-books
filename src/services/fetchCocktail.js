import { useState, useEffect } from 'react';

export const useFetchNewCocktail = () => {
  const [isLoadingCocktail, setIsLoadingCocktail] = useState(false);
  const [cocktail, setCocktail] = useState();

  const fetchNewCocktail = () => {
    setIsLoadingCocktail(true);
    try {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .then((data) => {
          const randomCocktail = {
            imageUrl: data.drinks[0].strDrinkThumb,
            title: data.drinks[0].strDrink,
          };
          // set our state with a cocktail
          setCocktail(randomCocktail);
          setIsLoadingCocktail(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     fetchNewCocktail();
  //   }, []);

  return {
    cocktail,
    isLoadingCocktail,
    fetchNewCocktail,
  };
};
