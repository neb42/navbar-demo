import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';
import {
  widthAnimation,
} from '../constants.styles';

export const NavbarItemGroup = styled.div`
  margin: 5px;
  padding: 10px 0;

  ${({ pathname, path }) => pathname.startsWith(path) ? `
    background-color: rgba(255, 255, 255, 0.03);
  ` : ''}

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

export const NavbarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const Collapsed = styled.div`
  margin-left: 15px;
`;

export const Expanded = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  color: ${PALETTE.white};
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  font-size: 13px;
  ${widthAnimation}
`;
