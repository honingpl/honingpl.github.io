import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  NavComponent,
  NavWrapper,
  NavItem,
  StyledNavLink,
  ActiveStyle,
} from "./elements";

export const NavBar = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <NavComponent>
      <NavWrapper>
        <StyledNavLink
          to="/"
          exact
          activeStyle={ActiveStyle(themeContext.navBarActiveBg)}
        >
          <NavItem>Start</NavItem>
        </StyledNavLink>
        <StyledNavLink
          to="/contacts"
          activeStyle={ActiveStyle(themeContext.navBarActiveBg)}
        >
          <NavItem>Contacts</NavItem>
        </StyledNavLink>
        {/* <StyledNavLink
          to="/products"
          activeStyle={ActiveStyle(themeContext.navBarActiveBg)}
        >
          <NavItem>Products</NavItem>
        </StyledNavLink> */}
      </NavWrapper>
    </NavComponent>
  );
};
