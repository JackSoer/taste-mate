import { ReactElement } from 'react';
import './error.scss';

type PropsType = {
  errorMsg: string;
};

const Error = ({ errorMsg }: PropsType): ReactElement => {
  return <div className="error">{errorMsg}</div>;
};

export default Error;
