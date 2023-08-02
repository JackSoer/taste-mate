import './filter.scss';
import { ReactElement, useEffect, useRef } from 'react';
import FilterList from '../filterList/FilterList';

type PropsType = {
  filterIsOpen: boolean;
  setFilterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterBtn: React.MutableRefObject<HTMLButtonElement | null>;
};

const Filter = ({
  filterIsOpen,
  setFilterIsOpen,
  filterBtn,
}: PropsType): ReactElement => {
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClose = (e: any): void => {
      if (
        !filterRef?.current?.contains(e.target) &&
        !filterBtn?.current?.contains(e.target)
      ) {
        setFilterIsOpen(false);
      }
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, []);

  return (
    <div className={filterIsOpen ? 'overlay overlay--active' : 'overlay'}>
      <div
        className={filterIsOpen ? 'filter filter--active' : 'filter'}
        ref={filterRef}
      >
        <h3 className="filter__title">Filter</h3>
        <FilterList />
        <div className="filter__btns">
          <button className="filter__reset-btn">Reset</button>
          <button className="filter__apply-btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
