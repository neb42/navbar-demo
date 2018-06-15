// @flow

import React from 'react';

import * as Styles from './Navbar.styles';

type Props = {

};

type State = {
  expanded: boolean,
};

export default class Navbar extends React.Component<Props, State> {
  props: Props;
  state: State = {
    expanded: false,
  };

  handleMouseEnter = () => {
    this.setState({ expanded: true });
  }

  handleMouseLeave = () => {
    this.setState({ expanded: false });
  }

  render() {
    const { expanded } = this.state;
    return [
      <Styles.NavbarPlaceHolder />,
      <Styles.Navbar
        expanded={expanded}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Styles.NavbarItemList>

          <Styles.NavbarItem to="/page-1" >
            <Styles.NavbarItemCollapsed>
              😀
            </Styles.NavbarItemCollapsed>
            <Styles.NavbarItemExpanded expanded={expanded} >
              Page 1
            </Styles.NavbarItemExpanded>
          </Styles.NavbarItem>

          <Styles.NavbarItem to="/page-2" >
            <Styles.NavbarItemCollapsed>
              😉
            </Styles.NavbarItemCollapsed>
            <Styles.NavbarItemExpanded expanded={expanded} >
              Page 2
            </Styles.NavbarItemExpanded>
          </Styles.NavbarItem>

          <Styles.NavbarItem to="/page-3" >
            <Styles.NavbarItemCollapsed>
              ☹️
            </Styles.NavbarItemCollapsed>
            <Styles.NavbarItemExpanded expanded={expanded} >
              Page 3
            </Styles.NavbarItemExpanded>
          </Styles.NavbarItem>

        </Styles.NavbarItemList>
      </Styles.Navbar>,
    ];
  }
}
