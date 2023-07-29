import './recipesList.scss';
import { ReactElement } from 'react';
import RecipeType from '../../types/RecipeType';
import RecipeCart from '../recipeCart/RecipeCart';

type PropsType = {
  recipes: RecipeType[];
};

const RecipesList = ({ recipes }: PropsType): ReactElement => {
  return (
    <ul className="recipes-list">
      {recipes.map((recipe) => (
        <RecipeCart recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
};

export default RecipesList;
