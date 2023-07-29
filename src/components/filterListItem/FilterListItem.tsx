import { ReactElement } from 'react';

type PropsType = {
  title: string;
  id: number;
};

const FilterListItem = ({ title, id }: PropsType): ReactElement => {
  return (
    <div className="filter-list-item">
      <input
        type="checkbox"
        className="filter-list-item__checkbox"
        id={`filter-list-item__checkbox ${id.toString()}`}
      />
      <label
        htmlFor={`filter-list-item__checkbox ${id.toString()}`}
        className="filter-list-item__label"
      >
        {title}
      </label>
    </div>
  );
};

export default FilterListItem;
