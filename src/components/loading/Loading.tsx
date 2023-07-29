import { ReactElement } from 'react';
import LoadingIcon from '../../assets/images/icons/loading.svg';
import './loading.scss';

const Loading = (): ReactElement => {
  return (
    <div className="loading-box">
      <img src={LoadingIcon} alt="loading" className="loading-item" />
    </div>
  );
};

export default Loading;
