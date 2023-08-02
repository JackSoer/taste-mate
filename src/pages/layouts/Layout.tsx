import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Layout = (): ReactElement => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
