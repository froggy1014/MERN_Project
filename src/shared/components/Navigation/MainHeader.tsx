import { ReactNode } from 'react';

import './MainHeader.css';

function MainHeader({ children }: { children?: ReactNode }) {
  return <header className="main-header">{children}</header>;
}

export default MainHeader;
