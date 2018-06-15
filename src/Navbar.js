import React from 'react';
import { ICONS } from '@asidatascience/adler-ui';
import {
  Navbar,
  NavbarItem,
} from './components/Navbar';

const ProperNavbar = () => (
  <Navbar>
    <NavbarItem icon={ICONS.workspace} label="Workspace" path="/page-1" />
    <NavbarItem icon={ICONS.environment} label="Environments" path="/page-2" />
    <NavbarItem icon={ICONS.deployment} label="Deployments" path="/page-3" />
  </Navbar>
);

export default ProperNavbar;
