import './recipeCart.scss';
import { ReactElement } from 'react';
import RecipeType from '../../types/RecipeType';
import ClockIcon from '../../assets/images/icons/clock.svg';
import PlateIcon from '../../assets/images/icons/plate.svg';
import cutString from '../../utils/cutString';

type PropsType = {
  recipe: RecipeType;
};

const RecipeCart = ({ recipe }: PropsType): ReactElement => {
  return (
    <div className="recipe-cart">
      <div className="recipe-cart__top">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-cart__img"
        />
        <h4 className="recipe-cart__title">{cutString(recipe.title, 20)}</h4>
      </div>
      <div className="recipe-cart__info">
        <div className="recipe-cart__info-item">
          <img
            src={ClockIcon}
            alt="Clock icon"
            className="recipe-cart__info-item-img"
          />
          <p className="recipe-cart__info-item-desc">{recipe.readyInMinutes} Min</p>
        </div>
        <div className="recipe-cart__info-item">
          <img
            src={PlateIcon}
            alt="Plate icon"
            className="recipe-cart__info-item-img"
          />
          <p className="recipe-cart__info-item-desc">{recipe.servings} Serv</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCart;
