import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';

const collapsedWidth = '70px';
const expandedWidth = '200px';
const width = expanded => expanded ? expandedWidth : collapsedWidth;
const height = '100vh';
const animationSpeed = '0.3s';

const widthAnimation = css`
  -webkit-transition: width ${animationSpeed} ease-in-out;
  -moz-transition: width ${animationSpeed} ease-in-out;
  -o-transition: width ${animationSpeed} ease-in-out;
  transition: width ${animationSpeed} ease-in-out;
`;

export const NavbarPlaceHolder = styled.div`
  height: ${height};
  width: ${collapsedWidth};
  visibility: hidden;
`;

export const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${height};
  width: ${({ expanded }) => width(expanded)};
  background-color: ${PALETTE.black2};
  padding-top: 250px;
  ${widthAnimation}
`;

export const NavbarItemList = styled.div`
  background-color: ${PALETTE.black};
  padding: 5px 0;
  ${widthAnimation}
`;

export const NavbarItemGroup = styled.div`
  margin: 0 5px 5px 5px;

  ${({ pathname, basePath }) => pathname.startsWith(basePath) ? `
    background-color: rgba(255, 255, 255, 0.03);
  ` : ''}

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavbarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  cursor: pointer;
  ${widthAnimation}

  ${({ nested, activeClassName }) => nested ? `
    height: 30px;
  ` : `
    height: 60px;
  `}
`;

export const NavbarItemCollapsed = styled.div`
  ${({ nested }) => nested ? `
    margin-left: 20px;
  ` : `
    margin-left: 15px;
  `}
`;

export const NavbarItemExpanded = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  color: ${PALETTE.white};
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  ${({ nested }) => nested ? `
    font-size: 14px;
  ` : `
    font-size: 20px;
  `}
  ${widthAnimation}
`;
