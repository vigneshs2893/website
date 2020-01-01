import React from 'react';
import IsMobile from 'helpers/IsMobile';
import { HeaderWrapper } from './header.css';
import { Link } from '@reach/router';
import LogoSVG from '-!svg-react-loader!images/logo.svg';

const isMobileDevice = IsMobile();

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container lg-container xs-full-width">
        <Link to="/"><LogoSVG height={isMobileDevice ? '30' : '42'} /></Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
