import React from 'react';
import { PALETTE, ICONS } from '@asidatascience/adler-ui';
import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarFooter,
} from './components/Navbar';

const ProperNavbar = () => (
  <Navbar>
    <NavbarItem icon={ICONS.sherlock} iconSize={30} iconColor={PALETTE.blue} label="SherlockML" path="/home" />
    <NavbarItem icon={ICONS.search} iconSize={20} label="Search" path="/search" />
    <NavbarContent>
      <NavbarItem icon={ICONS.workspace} label="Workspace" path="/workspace" />
      <NavbarItem icon={ICONS.environment} label="Environments" path="/environments" />
      <NavbarItem icon={ICONS.datasets} label="Datasets" path="/datasets" />
      <NavbarItem icon={ICONS.report} label="Reports" path="/reports" />
      <NavbarItem icon={ICONS.deployment} label="Deployments" path="/deployments" >
        <NavbarItem icon={ICONS.apps} label="Apps" path="/deployments/apps" />
        <NavbarItem icon={ICONS.api} label="APIs" path="/deployments/apis" />
      </NavbarItem>
      <NavbarItem icon={ICONS.team} label="Collaborators" path="/team" />
      <NavbarItem icon={ICONS.settings} label="Settings" path="/settings" />
    </NavbarContent>
    <NavbarItem icon={ICONS.info} label="Support" path="/support" />
    <NavbarFooter>
      <NavbarItem icon={ICONS.zendesk} iconSize={30} label="Support" path="/support" />
      <NavbarItem icon={ICONS.settings} iconSize={30} label="Account" path="/account" />
    </NavbarFooter>
  </Navbar>
);

export default ProperNavbar;
