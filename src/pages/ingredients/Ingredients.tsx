import './ingredients.scss';
import { ReactElement } from 'react';

const Ingredients = (): ReactElement => {
  return (
    <div className="ingredients">
      <footer className="ingredients__footer">
        <button className="ingredients__next-btn">Next</button>
      </footer>
    </div>
  );
};

export default Ingredients;
