import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
  background-color: red;

  padding-top: 250px;
  ${widthAnimation}
`;

export const NavbarItemList = styled.div`
  background-color: green;
  padding: 5px 0;
  ${widthAnimation}
`;

export const NavbarItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
  margin: 0 5px 5px 5px;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  ${widthAnimation}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavbarItemCollapsed = styled.div`
  margin-left: 15px;
`;

export const NavbarItemExpanded = styled.div`
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
  margin-left: 5px;
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  ${widthAnimation}
`;
