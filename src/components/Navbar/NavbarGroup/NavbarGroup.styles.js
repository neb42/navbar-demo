import styled from 'styled-components';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';
import {
  collapsedWidth,
  widthAnimation,
  marginAnimation,
} from '../constants.styles';

const navbarItemMargin = 10;
const navbarItemRadius = (expanded, iconSize) =>
  ((collapsedWidth - (navbarItemMargin * 2) - iconSize) /   2);

export const NavbarGroup = styled.div`
  border-radius: 3px;
  margin: 0 ${navbarItemMargin}px;
  ${({ pathname, path }) => pathname.startsWith(path) ? `
    background-color: rgba(255, 255, 255, 0.03);
  ` : ''}

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

export const NavbarGroupHeader = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: ${({ iconSize }) => ((40 - iconSize) / 2)}px 0;
`;

export const Collapsed = styled.div`
  margin-left: ${({ expanded, iconSize }) => navbarItemRadius(expanded, iconSize)}px;
  ${marginAnimation}
`;

export const Expanded = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  color: ${PALETTE.white};
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  font-size: 12px;
  font-weight: ${TYPOGRAPHY.fontWeights.semiBold};
  ${widthAnimation}
`;
