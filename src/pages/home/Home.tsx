import './home.scss';
import { ReactElement, useEffect, useState } from 'react';
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
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [search, setSearch] = useState<string>('');

  const API_KEY: string = import.meta.env.VITE_API_KEY;

  const { data } = useFetchAxiosData(
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=100`
  );

  const {
    data: searchData,
    fetchError: searchFetchError,
    isLoading: searchIsLoading,
  } = useFetchAxiosData(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${search}&addRecipeInformation=true`
  );

  useEffect(() => {
    setRecipes(data?.data?.recipes);
  }, [data]);

  useEffect(() => {
    setRecipes(searchData?.data?.recipes);
  }, [searchData]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__intro-text">
          <h1 className="home__title">Welcome Chef!</h1>
          <p className="home__wish-text">Hope you are having a good day</p>
        </div>
        <Search setRecipes={setRecipes} search={search} setSearch={setSearch} />
        {!search && (
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
        )}
        <h2 className="home__recipes-title">
          {search ? 'Search' : 'Popular recipes'}
        </h2>
        {recipes && !searchIsLoading && !searchFetchError && (
          <RecipesList recipes={recipes} />
        )}
        {searchIsLoading && !searchFetchError && <Loading />}
        {searchFetchError && !searchIsLoading && (
          <Error errorMsg={searchFetchError} />
        )}
      </div>
    </div>
  );
};

export default Home;
