import React, { useEffect, memo } from 'react';
import { useFetchNewCocktail } from '../services/fetchCocktail';

export const CocktailPicker = (props) => {
  const { cocktail, isLoadingCocktail, fetchNewCocktail } =
    useFetchNewCocktail();

  useEffect(() => {
    fetchNewCocktail();
  }, []);

  return (
    <>
      <h3>What cocktail should I drink while I read?</h3>
      {/* {props.isLoading ? null : (
       
        ton className="button-54" onClick={handleCocktailPicker}>
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
      ) : cocktail ? (
        <div>
          <h4>{cocktail.title}</h4>
          <img
            src={cocktail.imageUrl}
            alt={`random cocktail named ${cocktail.title}`}
            style={{ maxWidth: '200px' }}
          />
        </div>
      ) : null}
    </>
  );
};
