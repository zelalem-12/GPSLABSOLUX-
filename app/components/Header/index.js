/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@material-ui/icons';
import './style.css';
function Header() {
  return (
    <nav className="header-container">
      <div className="header-logo">
        <MenuIcon className="menu-icon" />
        <p className="brand-name">
          <span style={{ marginRight: '0.4rem', color: '#0f0' }}>GPS</span>
          <span style={{ color: '#5149e6' }}>LABSOLUX</span>
        </p>
      </div>

      <AccountCircleIcon style={{ fontSize: '3rem' }} />
    </nav>
  );
}

Header.propTypes = {};

export default memo(Header);
