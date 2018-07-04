// @flow

import React from 'react';
import * as Styles from './NavbarGroups.styles';

type Props = {
  expanded: boolean,
  closeNavbar: Function,
  children: any,
};

const NavbarContent = ({ expanded, closeNavbar, children }: Props) => (
  <Styles.NavbarContent>
    {React.Children.map(children, child => {
      return React.cloneElement(
        child,
        { expanded, closeNavbar },
      );
    })}
  </Styles.NavbarContent>
);

export default NavbarContent;
