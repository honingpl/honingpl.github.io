import React from "react";
import { startText } from "../../content";
import startImage from "../../images/IMG_2198.jpg";

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
    <StartComponent>
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
  );
};
