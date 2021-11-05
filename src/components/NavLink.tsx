import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink(prop: NavLinkProps) {
  const { to, children } = prop;
  const { pathname } = useLocation();
  const match = to === pathname;
  return (
    <Link className={classNames('NavLink', { NavLinkMatch: match })} to={to}>
      {children}
    </Link>
  );
}

export { NavLink };
