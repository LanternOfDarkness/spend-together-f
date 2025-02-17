import React from 'react';
import './Header.scss';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
