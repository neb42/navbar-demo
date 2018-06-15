// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { Icon, ICONS, PALETTE } from '@asidatascience/adler-ui';

import * as Styles from './Navbar.styles';

type Props = {
  location: {
    pathname: string,
  },
};

type State = {
  expanded: boolean,
};

class Navbar extends React.Component<Props, State> {
  props: Props;
  state: State = {
    expanded: true,
  };

  handleMouseEnter = () => {
    this.setState({ expanded: true });
  }

  handleMouseLeave = () => {
    this.setState({ expanded: true });
  }

  render() {
    const { location: { pathname }} = this.props;
    const { expanded } = this.state;
    return [
      <Styles.NavbarPlaceHolder />,
      <Styles.Navbar
        expanded={expanded}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Styles.NavbarItemList>

          <Styles.NavbarItemGroup pathname={pathname} basePath="/page-1" >
            <Styles.NavbarItem to="/page-1" >
              <Styles.NavbarItemCollapsed>
                <Icon icon={ICONS.workspace} size={20} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} >
                Page 1
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>

            <Styles.NavbarItem to="/page-1" nested={true} >
              <Styles.NavbarItemCollapsed nested={true} >
                <Icon icon={ICONS.api} size={15} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} nested={true} >
                Page 1 A
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>

            <Styles.NavbarItem to="/page-1" nested={true} >
              <Styles.NavbarItemCollapsed nested={true} >
                <Icon icon={ICONS.apps} size={15} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} nested={true} >
                Page 1 B
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>

            <Styles.NavbarItem to="/page-1" nested={true} >
              <Styles.NavbarItemCollapsed nested={true} >
                <Icon icon={ICONS.team} size={15} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} nested={true} >
                Page 1 C
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>
          </Styles.NavbarItemGroup>

          <Styles.NavbarItemGroup pathname={pathname} basePath="/page-2" >
            <Styles.NavbarItem to="/page-2" >
              <Styles.NavbarItemCollapsed>
                <Icon icon={ICONS.environment} size={20} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} >
                Page 2
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>
          </Styles.NavbarItemGroup>

          <Styles.NavbarItemGroup pathname={pathname} basePath="/page-3" >
            <Styles.NavbarItem to="/page-3" >
              <Styles.NavbarItemCollapsed>
                <Icon icon={ICONS.deployment} size={20} color={PALETTE.white} />
              </Styles.NavbarItemCollapsed>
              <Styles.NavbarItemExpanded expanded={expanded} >
                Page 3
              </Styles.NavbarItemExpanded>
            </Styles.NavbarItem>
          </Styles.NavbarItemGroup>

        </Styles.NavbarItemList>
      </Styles.Navbar>,
    ];
  }
}

export default withRouter(Navbar);
