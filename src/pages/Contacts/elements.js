import styled from "styled-components";

export const ContactsComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.spaceBg};
  flex: 1;
`;

export const ContentWrapper = styled.div`
  // position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-items: space-around;
  align-items: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const ContactsText = styled.div`
  // position: relative;
  max-width: 400px;
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
`;

export const TextPara = styled.p`
  margin-top: 0;
  padding-top: 0;
`;

export const MapWrapper = styled.div`
  max-width: 400px;
  margin-left: 50px;
  position: relative;
  max-width: 400px;
  margin-left: 40px;
  margin-right: auto;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    margin-left: auto;
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 300px;
  frameborder: 0;
  border: 1px solid white;
`;

export const InstaWrapper = styled.div`
  // position: relative;
  display: flex;
  width: 20px;
  height: 20px;
`;

export const InstaLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
`;
