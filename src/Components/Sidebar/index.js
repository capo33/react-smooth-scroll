import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrap,
  SidebarRoute,
} from "./SidebarStyle";
import { links } from "./LinkData";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={toggle}>
          {links.map((link) => {
            return (
              <SidebarLink key={link.id} to={link.to} onClick={toggle}>
                {link.text}
              </SidebarLink>
            );
          })}
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
