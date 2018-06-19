// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Icon, PALETTE } from '@asidatascience/adler-ui';
import * as Styles from './NavbarItem.styles';

type Props = {
  icon: any,
  label: string,
  path: string,
  children: any,
  expanded: boolean,
  nested: boolean,
  location: {
    pathname: string,
  },
};

const NavbarItem = ({
  icon,
  label,
  path,
  expanded,
  nested,
  children,
  location: {
    pathname,
  },
}: Props) => (
  <Styles.Container pathname={pathname} path={path} nested={nested} hasNestedItem={React.Children.count(children) > 0 && pathname.startsWith(path)} >
    <Styles.NavbarItem to={path} hasNestedItem={React.Children.count(children) > 0 && pathname.startsWith(path)} >
      <Styles.Collapsed nested={nested} expanded={expanded} >
        <Icon icon={icon} size={Styles.iconSize(nested)} color={pathname.startsWith(path) ? PALETTE.blue : PALETTE.grey5} />
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
