import styled from "styled-components";

export const FooterComponent = styled.section`
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.navBarBg};
  color: ${({ theme }) => theme.navBarText};
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  padding-top: 6px;
  padding-bottom: 6px;
`;
