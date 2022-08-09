import React, { useState } from 'react';
import { useEffect } from 'react';

export const CocktailPicker = (props) => {
  /**
   * User has clicked to select a cocktail
   */
  //   const handleCocktailPicker = () => {
  //     // make a fetch request to some api
  //     setIsLoading(true);
  //     try {
  //       fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const randomCocktail = {
  //             imageUrl: data.drinks[0].strDrinkThumb,
  //             title: data.drinks[0].strDrink,
  //           };
  //           // set our state with a cocktail
  //           setCocktail(randomCocktail);
  //           setIsLoading(false);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <h3>What cocktail should I drink while I read?</h3>
      {/* {props.isLoading ? null : (
        <button className="button-54" onClick={handleCocktailPicker}>
          Click here to have a cocktail selected
        </button>
      )} */}
      {props.isLoading ? (
        <h3>loading!</h3>
      ) : props.cocktail ? (
        <div>
          <h4>{props.cocktail.title}</h4>
          <img
            src={props.cocktail.imageUrl}
            alt={`random cocktail named ${props.cocktail.title}`}
            style={{ maxWidth: '200px' }}
          />
        </div>
      ) : null}
    </>
  );
};
