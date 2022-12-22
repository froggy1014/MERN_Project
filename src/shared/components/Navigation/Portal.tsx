import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

function Portal({
  children,
  selector,
}: {
  children: ReactNode;
  selector: string;
}) {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
}

export default Portal;
