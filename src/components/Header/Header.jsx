import React from "react";

import logo from "../../images/Logo1-160.png";

import { HeaderComponent, LogoWrapper } from "./elements";

export const Header = () => {
  return (
    <HeaderComponent>
      <LogoWrapper>
        <img src={logo} alt="logo"></img>
      </LogoWrapper>
    </HeaderComponent>
  );
};
