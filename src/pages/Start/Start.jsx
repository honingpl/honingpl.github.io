import React from "react";
import { startText } from "../../content";
import startImage from "../../images/IMG_2198.jpg";
import fundLogo from '../../images/fundusz.png';

import {
  StartComponent,
  ContentWrapper,
  StartText,
  TextPara,
  PhotoWrapper,
  StartPhoto,
} from "./elements";

export const Start = () => {
  return (
    <>    <StartComponent>
      <ContentWrapper>
        <StartText>
          {startText.map((item) => (
            <TextPara>{item}</TextPara>
          ))}
        </StartText>
        <PhotoWrapper>
          <StartPhoto src={startImage} alt="bees"></StartPhoto>
        </PhotoWrapper>
      </ContentWrapper>
    </StartComponent>
      <div style={{ backgroundColor: '#FFECCC'}}>
        <a href="https://pfrsa.pl" target="_blank" rel="noopener noreferrer">
          <img src={fundLogo} alt="Logo of Polski Fundusz Rozwoju" />
        </a>
      </div>
    </>
  );
};
