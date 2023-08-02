import './filterList.scss';
import { ReactElement } from 'react';
import filterList from '../../data/filterList';
import FilterListItem from '../filterListItem/FilterListItem';

const FilterList = (): ReactElement => {
  return (
    <ul className="filter-list">
      {filterList.map((filterItem) => (
        <FilterListItem title={filterItem.title} id={filterItem.id} key={filterItem.id}/>
      ))}
    </ul>
  );
};

export default FilterList;
