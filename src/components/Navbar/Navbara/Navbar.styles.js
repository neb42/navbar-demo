import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';

import {
  height,
  collapsedWidth,
  width,
  widthAnimation,
} from '../constants.styles';

export const NavbarPlaceHolder = styled.div`
  height: ${height}vh;
  width: ${collapsedWidth}px;
  visibility: hidden;
`;

export const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${height}vh;
  width: ${({ expanded }) => width(expanded)}px;
  background-color: ${PALETTE.black2};
  padding-top: 250px;
  ${widthAnimation}
`;
