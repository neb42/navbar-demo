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
  <Styles.NavbarItemGroup pathname={pathname} path={path} nested={nested} >
    <Styles.NavbarItem to={path} >
      <Styles.Collapsed>
        <Icon icon={icon} size={14} color={pathname.startsWith(path) ? PALETTE.blue : PALETTE.grey5} />
      </Styles.Collapsed>
      <Styles.Expanded expanded={expanded} >
        <span>{label}</span>
      </Styles.Expanded>
    </Styles.NavbarItem>
    {!nested && React.Children.map(children, child => {
      if (child.type.displayName !== 'withRouter(NavbarItem)') {
        throw Error('Only NavbarItem components are allow as children');
      }
      return React.cloneElement(
        child,
        {
          expanded,
          nested: true,
        },
      );
    })}
  </Styles.NavbarItemGroup>
);
NavbarItem.displayName = 'NavbarItem';
export default withRouter(NavbarItem);
