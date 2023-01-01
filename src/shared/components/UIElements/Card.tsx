import { ReactNode } from 'react';

type TCard = {
  className?: string;
  children: ReactNode;
};

function Card(props: TCard) {
  const { className, children } = props;
  return (
    <div
      className={`m-0 shadow-lg rounded-md p-4 overflow-hidden bg-white ${
        className || null
      }`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
};

export default Card;
