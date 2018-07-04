// @flow

import React from 'react';
import * as Styles from './NavbarGroups.styles';

type Props = {
  expanded: boolean,
  children: any,
};

const NavbarFooter = ({ expanded, children }: Props) => (
  <Styles.NavbarFooter>
    {React.Children.map(children, child => {
      return React.cloneElement(
        child,
        { expanded },
      );
    })}
  </Styles.NavbarFooter>
);

export default NavbarFooter;
