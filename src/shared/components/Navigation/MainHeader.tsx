import { ReactNode } from 'react';

function MainHeader({ children }: { children?: ReactNode }) {
  return <header className="main-header">{children}</header>;
}

export default MainHeader;
