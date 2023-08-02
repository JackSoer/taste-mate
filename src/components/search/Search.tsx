import './search.scss';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import FilterIcon from '../../assets/images/icons/filter.svg';
import Filter from '../filter/Filter';
import RecipeType from '../../types/RecipeType';

type PropsType = {
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: PropsType): ReactElement => {
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  const filterBtn = useRef<HTMLButtonElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <div className="search__icon">
        <svg
          fill="#ff555f"
          height="18px"
          width="18px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 53.627 53.627"
        >
          <path
            d="M53.627,49.385L37.795,33.553C40.423,30.046,42,25.709,42,21C42,9.42,32.58,0,21,0S0,9.42,0,21s9.42,21,21,21
	c4.709,0,9.046-1.577,12.553-4.205l15.832,15.832L53.627,49.385z M2,21C2,10.523,10.523,2,21,2s19,8.523,19,19s-8.523,19-19,19
	S2,31.477,2,21z M35.567,36.093c0.178-0.172,0.353-0.347,0.525-0.525c0.146-0.151,0.304-0.29,0.445-0.445l14.262,14.262
	l-1.415,1.415L35.123,36.537C35.278,36.396,35.416,36.238,35.567,36.093z"
          />
        </svg>
      </div>
      <button
        className="search__filter-btn"
        onClick={() => setFilterIsOpen(true)}
        ref={filterBtn}
      >
        <img
          src={FilterIcon}
          alt="filter"
          className="search__filter-btn-icon"
        />
      </button>
      <Filter
        filterIsOpen={filterIsOpen}
        setFilterIsOpen={setFilterIsOpen}
        filterBtn={filterBtn}
      />
    </div>
  );
};

export default Search;
