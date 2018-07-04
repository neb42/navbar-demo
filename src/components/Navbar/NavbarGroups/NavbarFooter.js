// @flow

import React from 'react';
import * as Styles from './NavbarGroups.styles';

type Props = {
  expanded: boolean,
  closeNavbar: Function,
  children: any,
};

const NavbarFooter = ({ expanded, closeNavbar, children }: Props) => (
  <Styles.NavbarFooter>
    {React.Children.map(children, child => {
      return React.cloneElement(
        child,
        { expanded, closeNavbar },
      );
    })}
  </Styles.NavbarFooter>
);

export default NavbarFooter;
