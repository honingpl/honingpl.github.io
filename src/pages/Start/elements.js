import styled from "styled-components";

export const StartComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.spaceBg};
  flex-grow: 1;
`;

export const ContentWrapper = styled.div`
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

export const StartText = styled.div`
  max-width: 400px;
  font-family: Roboto, Georgia, serif;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
`;

export const TextPara = styled.p`
  margin-top: 0;
  padding-top: 0;
`;

export const PhotoWrapper = styled.div`
  max-width: 400px;
  margin-left: 50px;
`;
export const StartPhoto = styled.img`
  width: 100%;
`;
