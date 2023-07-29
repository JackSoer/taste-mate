import './home.scss';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/search/Search';
import IngredientsImg from '../../assets/images/thumbnails/ingredients.png';
import ArrowImg from '../../assets/images/icons/arrow.svg';
import useFetchAxiosData from '../../hooks/useFetchAxiosData';
import RecipesList from '../../components/recipesList/RecipesList';
import RecipeType from '../../types/RecipeType';
import Error from '../../components/error/Error';
import Loading from '../../components/loading/Loading';

const Home = (): ReactElement => {
  const API_KEY: string = import.meta.env.VITE_API_KEY;

  const { data, fetchError, isLoading } = useFetchAxiosData(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=100`
  );
  const recipes: RecipeType[] | null = data?.data?.recipes;

  return (
    <div className="home">
      <div className="container">
        <div className="home__intro-text">
          <h1 className="home__title">Welcome Chef!</h1>
          <p className="home__wish-text">Hope you are having a good day</p>
        </div>
        <Search />
        <nav className="home__nav">
          <div className="home__nav-link">
            <img
              src={IngredientsImg}
              alt="Ingredients"
              className="home__link-img"
            />
            <div className="home__link-text">
              <h3 className="home__link-title">Let's see the ingredients</h3>
              <p className="home__link-desc">
                You can give us the ingredients you have and we will give you
                delicious recipes.
              </p>
              <Link to="/ingredients" className="home__link-btn">
                <img src={ArrowImg} alt="Ingredients link" />
              </Link>
            </div>
          </div>
        </nav>
        <h2 className="home__recipes-title">Popular recipes</h2>
        {isLoading && !fetchError && <Loading />}
        {fetchError && !isLoading && <Error errorMsg={fetchError} />}
        {recipes && !isLoading && !fetchError && (
          <RecipesList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default Home;
