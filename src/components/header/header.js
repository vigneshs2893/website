import React from 'react';
import IsMobile from 'helpers/IsMobile';
import { HeaderWrapper } from './header.css';
import { Link } from '@reach/router';
import LogoSVG from '-!svg-react-loader!images/logo-pf-bold.svg';
import LogoDarkSVG from '-!svg-react-loader!images/logo-pf-dark.svg';

const isMobileDevice = IsMobile();

const Header = ({ showCareers, showDark=true }) => {
  return (
    <HeaderWrapper>
      <div className="container lg-container xs-full-width">
        <Link to="/">
          {
            showDark ?
              <LogoDarkSVG height={isMobileDevice ? '30' : '42'} />
              : <LogoSVG height={isMobileDevice ? '30' : '42'} />
          }
        </Link>
        {
          showCareers &&
            <Link to='/careers' className='hiring-link'><span>We are hiring!</span></Link>
        }
      </div>
    </HeaderWrapper>
  );
};

export default Header;
