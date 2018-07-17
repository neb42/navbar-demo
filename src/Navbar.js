import React from 'react';
import { PALETTE, ICONS } from '@asidatascience/adler-ui';
import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarFooter,
  NavbarGroup,
} from './components/Navbar';

const CustomExpanded = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span>SherlockML</span>
    <span>Project/name</span>
  </div>
);

const ProperNavbar = () => (
  <Navbar>
    <NavbarItem icon={ICONS.sherlock} iconSize={30} iconColor={PALETTE.blue} expandedComponent={<CustomExpanded />} path="/home" />
    <NavbarItem icon={ICONS.search} iconSize={20} label="Search" onClick={() => console.log('Open search panel')} />
    <NavbarContent>
      <NavbarItem icon={ICONS.workspace} label="Workspace" path="/workspace" />
      <NavbarItem icon={ICONS.environment} label="Environments" path="/environments" />
      <NavbarItem icon={ICONS.datasets} label="Datasets" path="/datasets" />
      <NavbarItem icon={ICONS.report} label="Reports" path="/reports" />
      <NavbarGroup icon={ICONS.deployment} label="Deployments" >
        <NavbarItem icon={ICONS.apps} label="Apps" path="/deployments/apps" />
        <NavbarItem icon={ICONS.api} label="APIs" path="/deployments/apis" />
      </NavbarGroup>
      <NavbarItem icon={ICONS.team} label="Collaborators" path="/team" />
      <NavbarItem icon={ICONS.settings} label="Settings" path="/settings" />
    </NavbarContent>
    <NavbarItem icon={ICONS.info} label="Support" path="/support" />
    <NavbarFooter>
      <NavbarItem icon={ICONS.zendesk} iconSize={30} label="Support" path="/support" />
      <NavbarItem collapsedComponent={<div>foo</div>} iconSize={30} label="Account" path="/account" />
    </NavbarFooter>
  </Navbar>
);

export default ProperNavbar;
