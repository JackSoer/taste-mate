import './footer.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactElement, useEffect, useState } from 'react';

const Footer = (): ReactElement => {
  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState<string>('home');

  useEffect(() => {
    if (pathname === '/') {
      setActivePage('home');
    } else if (pathname === '/favorite') {
      setActivePage('favorite');
    } else {
      setActivePage('profile');
    }
  }, [pathname]);

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link
          className={
            activePage === 'home'
              ? 'footer__link footer__link--active'
              : 'footer__link'
          }
          to={'/'}
        >
          <svg
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            width="800px"
            height="800px"
            viewBox="0 0 495.398 495.398"
            className="footer__link-img"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                  />
                  <path
                    d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p className="footer__link-title">Home</p>
        </Link>
        <Link
          className={
            activePage === 'favorite'
              ? 'footer__link footer__link--active'
              : 'footer__link'
          }
          to={'/favorite'}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            className="footer__link-img"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
              fill="#080341"
            />
          </svg>
          <p className="footer__link-title">Favorite</p>
        </Link>
        <Link
          className={
            activePage === 'profile'
              ? 'footer__link footer__link--active'
              : 'footer__link'
          }
          to={'/profile'}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            className="footer__link-img"
            fill="currentColor"
          >
            <g clipPath="url(#clip0_15_82)">
              <rect width="24" height="24" fill="white" />
              <g filter="url(#filter0_d_15_82)">
                <path
                  d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                  fill="#000000"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_15_82"
                x="2.55444"
                y="3.5"
                width="18.8911"
                height="19"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_15_82"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_15_82"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_15_82">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="footer__link-title">Profile</p>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
