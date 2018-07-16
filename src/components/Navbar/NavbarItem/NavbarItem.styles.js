import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PALETTE, TYPOGRAPHY } from '@asidatascience/adler-ui';
import {
  collapsedWidth,
  widthAnimation,
  marginAnimation,
} from '../constants.styles';

const navbarItemMargin = 10;
const navbarItemRadius = (nested, expanded, iconSize) =>
  ((collapsedWidth - (navbarItemMargin * 2) - iconSize) /   2)
  + ((nested && expanded) ? 20 : 0);

const NavbarItemBase = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: ${({ nested, iconSize }) => ((40 - iconSize) / 2) - (nested ? 5 : 0)}px 0;

  margin: 0 ${({ groupHeader, nested }) => groupHeader || nested ? 0 : `${navbarItemMargin}px`};
  border-radius: ${({ groupHeader, nested }) => groupHeader || nested ? '0' : '3px'};
  ${({ hightlightOnHover, groupHeader, pathname, path }) => hightlightOnHover && !groupHeader && pathname.startsWith(path) ? `
    background-color: rgba(255, 255, 255, 0.03);
  ` : ''}

  ${({ hightlightOnHover, groupHeader }) => (!hightlightOnHover || groupHeader) ? '' : `
    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }
  `}
`;

export const NavbarItemDiv = styled.div`
  ${NavbarItemBase}
`;

export const NavbarItemLink = styled(NavLink)`
  ${NavbarItemBase}
`;

export const Collapsed = styled.div`
  margin-left: ${({ nested, expanded, iconSize }) => navbarItemRadius(nested, expanded, iconSize)}px;
  ${marginAnimation}
`;

export const Expanded = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  color: ${PALETTE.white};
  width: ${({ expanded }) => expanded ? 'auto' : '0%'};
  font-size: ${({ nested }) => nested ? 10 : 12}px;
  font-weight: ${TYPOGRAPHY.fontWeights.semiBold};
  ${widthAnimation}
`;
