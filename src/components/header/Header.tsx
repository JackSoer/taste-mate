import './header.scss';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import BackArrowImg from '../../assets/images/icons/back-arrow.svg';

type PropsType = {
  title: string;
  isHomeArrow: boolean;
};

const Header = ({ title, isHomeArrow }: PropsType): ReactElement => {
  return (
    <header className="header">
      {isHomeArrow && (
        <Link to="/" className="header__back-link">
          <img
            src={BackArrowImg}
            alt="Back button"
            className="header__back-link-img"
          />
        </Link>
      )}
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
