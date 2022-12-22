import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

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
      <button className="side-drawer" onClick={onClick}>
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
