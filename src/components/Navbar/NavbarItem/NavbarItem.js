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
  hightlightOnHover: boolean,
  toggleNestedItems: Function,
  onClick: Function,
  closeNavbar: Function,
  collapsedComponent: any,
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
  hightlightOnHover,
  toggleNestedItems,
  onClick,
  closeNavbar,
  collapsedComponent,
  location: {
    pathname,
  },
}: Props) => {
  const Container = path ? Styles.NavbarItemLink : Styles.NavbarItemDiv;
  const handleOnClick = (event: MouseEvent) => {
    onClick && onClick(event);
    closeNavbar && closeNavbar();
  };
  const handleGroupHeaderToggle = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    toggleNestedItems && toggleNestedItems();
  };
  const Collapsed = () => collapsedComponent
    ? collapsedComponent
    : icon
    ? (
      <Icon
        icon={icon}
        size={iconSize || getIconSize(nested)}
        color={iconColor || pathname.startsWith(path) ? PALETTE.blue : PALETTE.grey5}
      />
    ) : null;
  return (
    <Container
      to={path}
      onClick={handleOnClick}
      pathname={pathname}
      path={path}
      nested={nested}
      groupHeader={groupHeader}
      hightlightOnHover={hightlightOnHover}
      iconSize={iconSize || getIconSize(nested)}
    >
      <Styles.Collapsed
        nested={nested}
        expanded={expanded}
        iconSize={iconSize || getIconSize(nested)}
      >
        <Collapsed />
      </Styles.Collapsed>
      <Styles.Expanded expanded={expanded} nested={nested} >
        <span>{label}</span>
        {groupHeader && (
          <span onClick={handleGroupHeaderToggle} >
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
    </Container>
  );
};
NavbarItem.displayName = 'NavbarItem';
export default withRouter(NavbarItem);
