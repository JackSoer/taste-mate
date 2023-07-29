import { ReactElement } from 'react';
import filterList from '../../data/filterList';
import FilterListItem from '../filterListItem/FilterListItem';

const Filter = (): ReactElement => {
  return (
    <div className="overlay">
      <div className="filter">
        <h3 className="filter__title">Filter</h3>
        {filterList.map((filterItem) => (
          <FilterListItem title={filterItem.title} id={filterItem.id} />
        ))}
        <div className="filter__btns">
          <button className="filter__reset-btn">Reset</button>
          <button className="filter__apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
