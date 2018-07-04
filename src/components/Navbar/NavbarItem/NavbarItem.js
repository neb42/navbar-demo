// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Icon, PALETTE } from '@asidatascience/adler-ui';
import * as Styles from './NavbarItem.styles';

type Props = {
  icon: any,
  iconSize?: number,
  iconColor?: string,
  label: string,
  path: string,
  children: any,
  expanded: boolean,
  nested: boolean,
  closeNavbar: Function,
  location: {
    pathname: string,
  },
};

export const getIconSize = nested => nested ? 14 : 16;

const NavbarItem = ({
  icon,
  iconSize,
  iconColor,
  label,
  path,
  expanded,
  nested,
  closeNavbar,
  children,
  location: {
    pathname,
  },
}: Props) => (
  <Styles.Container onClick={closeNavbar} pathname={pathname} path={path} nested={nested} hasNestedItem={React.Children.count(children) > 0 && pathname.startsWith(path)} iconSize={iconSize || getIconSize(nested)} >
    <Styles.NavbarItem to={path} hasNestedItem={React.Children.count(children) > 0 && pathname.startsWith(path)} >
      <Styles.Collapsed nested={nested} expanded={expanded} iconSize={iconSize || getIconSize(nested)} >
        <Icon icon={icon} size={iconSize || getIconSize(nested)} color={iconColor || pathname.startsWith(path) ? PALETTE.blue : PALETTE.grey5} />
      </Styles.Collapsed>
      <Styles.Expanded expanded={expanded} nested={nested} >
        <span>{label}</span>
      </Styles.Expanded>
    </Styles.NavbarItem>
    {!nested && pathname.startsWith(path) && React.Children.map(children, child => {
      return React.cloneElement(
        child,
        {
          expanded,
          nested: true,
        },
      );
    })}
  </Styles.Container>
);
NavbarItem.displayName = 'NavbarItem';
export default withRouter(NavbarItem);
