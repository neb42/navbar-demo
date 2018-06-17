import React from 'react';
import { ICONS } from '@asidatascience/adler-ui';
import {
  Navbar,
  NavbarItem,
  NavbarContent,
} from './components/Navbar';

const ProperNavbar = () => (
  <Navbar>
    <NavbarContent>
      <NavbarItem icon={ICONS.workspace} label="Workspace" path="/page-1" />
      <NavbarItem icon={ICONS.environment} label="Environments" path="/page-2" />
      <NavbarItem icon={ICONS.deployment} label="Deployments" path="/page-3" >
        <NavbarItem icon={ICONS.apps} label="Apps" path="/page-3" />
        <NavbarItem icon={ICONS.api} label="APIs" path="/page-4" />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default ProperNavbar;
