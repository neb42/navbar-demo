// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Icon, ICONS, PALETTE } from '@asidatascience/adler-ui';
import * as Styles from './NavbarItem.styles';

type Props = {
  icon: any,
  iconSize?: number,
  iconColor?: string,
  label: string,
  path: string,
  expanded: boolean,
  nested: boolean,
  groupHeader: boolean,
  showNestedItems: boolean,
  toggleNestedItems: Function,
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
  groupHeader,
  showNestedItems,
  toggleNestedItems,
  closeNavbar = () => {},
  location: {
    pathname,
  },
}: Props) => (
  <Styles.NavbarItem
    to={path}
    onClick={closeNavbar}
    pathname={pathname}
    path={path}
    nested={nested}
    groupHeader={groupHeader}
    iconSize={iconSize || getIconSize(nested)}
  >
    <Styles.Collapsed
      nested={nested}
      expanded={expanded}
      iconSize={iconSize || getIconSize(nested)}
    >
      <Icon
        icon={icon}
        size={iconSize || getIconSize(nested)}
        color={iconColor || pathname.startsWith(path) ? PALETTE.blue : PALETTE.grey5}
      />
    </Styles.Collapsed>
    <Styles.Expanded expanded={expanded} nested={nested} >
      <span>{label}</span>
      {groupHeader && (
        <span onClick={toggleNestedItems} >
          <Icon
            icon={ICONS.caret}
            color={PALETTE.grey5}
            size={10}
            mixins={[
              'cursor: pointer;',
              'margin-left: 5px;',
              showNestedItems ? 'transform: rotate(90deg);' : '',
            ]}
          />
        </span>
      )}
    </Styles.Expanded>
  </Styles.NavbarItem>
);
NavbarItem.displayName = 'NavbarItem';
export default withRouter(NavbarItem);
