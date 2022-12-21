import { ReactNode } from 'react';

import './Card.css';

type TCard = {
  className?: string;
  children: ReactNode;
};

function Card(props: TCard) {
  const { className, children } = props;
  return <div className={`card ${className || null}`}>{children}</div>;
}

Card.defaultProps = {
  className: '',
};

export default Card;
