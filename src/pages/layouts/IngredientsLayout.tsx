import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const IngredientsLayout = (): ReactElement => {
  return (
    <>
      <Header title={'Your Ingredients'} isHomeArrow={true} />
      <Outlet />
    </>
  );
};

export default IngredientsLayout;
