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
    const { children } = this.props;
    const urlArray = React.Children.map(children, child => child.props.path);
    const A = urlArray.concat().sort();
    const a1 = A[0];
    const a2 = A[A.length-1];
    const L = a1.length;
    let i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)){
      i++;
    }
    const commonUrl = a1.substring(0, i);
    return commonUrl.split('/').slice(0, -1).join('/');
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
          path={this.path}
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
