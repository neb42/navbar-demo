import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';
import {
  collapsedWidth,
  widthAnimation,
} from '../constants.styles';

export const iconSize = nested => nested ? 14 : 16;
const navbarItemMargin = 10;
const navbarItemRadius = nested => ((collapsedWidth - (navbarItemMargin * 2) - iconSize(nested)) /   2) + (nested ? 5 : 0);

export const Container = styled.div`
  margin: ${({ nested }) => nested ? 0 : `${navbarItemMargin}px`};
  padding: ${({ nested }) => ((40 - iconSize(nested)) / 2) - (nested ? 5 : 0)}px 0;
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
  margin-left: ${({ nested }) => navbarItemRadius(nested)}px;
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
