// @flow

import React from 'react';
import * as Styles from './NavbarGroups.styles';

type Props = {
  expanded: boolean,
  children: any,
};

const NavbarContent = ({ expanded, children }: Props) => (
  <Styles.NavbarContent>
    {React.Children.map(children, child => {
      return React.cloneElement(
        child,
        { expanded },
      );
    })}
  </Styles.NavbarContent>
);

export default NavbarContent;
