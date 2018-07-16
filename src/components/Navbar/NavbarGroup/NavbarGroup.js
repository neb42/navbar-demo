// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Icon, PALETTE } from '@asidatascience/adler-ui';

import NavbarItem from '../NavbarItem';
import * as Styles from './NavbarGroup.styles';

type Props = {
  icon: any,
  iconSize?: number,
  iconColor?: string,
  pathname: string,
  label: string,
  expanded: boolean,
  hightlightOnHover: boolean,
  closeNavbar: Function,
  children: any,
  location: {
    pathname: string,
  },
};

type State = {
  showNestedItems: boolean,
};

const defaultIconSize = 16;

class NavbarGroup extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      showNestedItems: props.location.pathname.startsWith(this.path),
    };
  }

  get path() {
    return React.Children.toArray(this.props.children)[0].props.path;
  }

  handleOnClick = () => {
    const { children, location: { pathname }} = this.props;
    if (!pathname.startsWith(this.path)) {
      this.setState({ showNestedItems: true });
    }
  }

  toggleNestedItems = () => {
    console.log('toggle')
    this.setState(prevState => ({
      showNestedItems: !prevState.showNestedItems,
    }));
  }

  render() {
    const {
      icon,
      iconSize,
      iconColor,
      label,
      expanded,
      closeNavbar,
      hightlightOnHover,
      children,
      location: {
        pathname,
      },
    } = this.props;
    const { showNestedItems } = this.state;

    return (
      <Styles.NavbarGroup pathname={pathname} path={this.path} >
        <NavbarItem
          groupHeader
          icon={icon}
          iconSize={iconSize}
          iconColor={iconColor}
          label={label}
          path={React.Children.toArray(children)[0].props.path}
          expanded={expanded}
          closeNavbar={this.handleOnClick}
          showNestedItems={showNestedItems}
          toggleNestedItems={this.toggleNestedItems}
        />
        {showNestedItems && React.Children.map(children, child => {
          return React.cloneElement(
            child,
            { hightlightOnHover, expanded, closeNavbar, nested: true },
          );
        })}
      </Styles.NavbarGroup>
    );
  }

}

export default withRouter(NavbarGroup);
