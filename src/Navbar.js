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
      <NavbarItem icon={ICONS.workspace} label="Workspace" path="/workspace" />
      <NavbarItem icon={ICONS.environment} label="Environments" path="/environments" />
      <NavbarItem icon={ICONS.deployment} label="Deployments" path="/deployments" >
        <NavbarItem icon={ICONS.apps} label="Apps" path="/deployments/apps" />
        <NavbarItem icon={ICONS.api} label="APIs" path="/deployments/apis" />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);

export default ProperNavbar;
