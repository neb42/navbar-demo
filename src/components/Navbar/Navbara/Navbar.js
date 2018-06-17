// @flow

import React from 'react';
import { withRouter } from 'react-router';
import * as Styles from './Navbar.styles';

type Props = {
  children: any,
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
    expanded: false,
  };

  handleMouseEnter = () => {
    this.setState({ expanded: true });
  }

  handleMouseLeave = () => {
    this.setState({ expanded: false });
  }

  render() {
    const { children, location: { pathname }} = this.props;
    const { expanded } = this.state;
    return [
      <Styles.NavbarPlaceHolder />,
      <Styles.Navbar
        expanded={expanded}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(
            child,
            { expanded },
          );
        })}
      </Styles.Navbar>,
    ];
  }
};

export default withRouter(Navbar);
