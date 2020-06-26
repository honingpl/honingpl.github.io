import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.navBarBg};

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  color: ${({ theme }) => theme.navBarText};
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  font-family: "Roboto Slab", Georgia, serif;
  font-weight: normal;
  font-size: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.9;
  }
  text-decoration: none;
`;

export const ActiveStyle = (navBarActiveBg) => ({
  opacity: "1",
  fontWeight: "bolder",
  cursor: "default",
  backgroundColor: navBarActiveBg,
  fontSize: "26px",
});
