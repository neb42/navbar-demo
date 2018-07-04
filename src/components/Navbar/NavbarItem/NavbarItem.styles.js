import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';
import {
  collapsedWidth,
  widthAnimation,
  marginAnimation,
} from '../constants.styles';

const navbarItemMargin = 10;
const navbarItemRadius = (nested, expanded, iconSize) => ((collapsedWidth - (navbarItemMargin * 2) - iconSize) /   2) + ((nested && expanded) ? 20 : 0);

export const Container = styled.div`
  margin: 0 ${({ nested }) => nested ? 0 : `${navbarItemMargin}px`};
  padding: ${({ nested, iconSize }) => ((40 - iconSize) / 2) - (nested ? 5 : 0)}px 0;
  border-radius: 3px;
  ${({ hasNestedItem }) => hasNestedItem ? 'padding-bottom: 0;' : ''}

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
  margin-bottom: ${({ hasNestedItem }) => hasNestedItem ? 5 : 0}px;
`;

export const Collapsed = styled.div`
  margin-left: ${({ nested, expanded, iconSize }) => navbarItemRadius(nested, expanded, iconSize)}px;
  ${marginAnimation}
`;

export const Expanded = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  color: ${PALETTE.white};
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  font-size: ${({ nested }) => nested ? 10 : 12}px;
  font-weight: ${TYPOGRAPHY.fontWeights.semiBold};
  ${widthAnimation}
`;
