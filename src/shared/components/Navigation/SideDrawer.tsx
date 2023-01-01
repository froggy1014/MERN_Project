import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = ({
  show,
  onClick,
  children,
}: {
  show: boolean;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <button
        className="fixed left-0 top-0 z-40 h-screen w-4/6 bg-shyGreen-700 shadow-lg text-black"
        onClick={onClick}
      >
        {children}
      </button>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('portal') as HTMLElement,
  );
};

export default SideDrawer;
