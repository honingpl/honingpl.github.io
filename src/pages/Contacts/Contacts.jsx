import React from "react";
import { contacts } from "../../content";
import instaLogo from "../../images/instagram-icon.png";

import {
  ContactsComponent,
  ContentWrapper,
  ContactsText,
  TextPara,
  InstaWrapper,
  InstaLogo,
  Link,
  MapWrapper,
  StyledIframe,
} from "./elements";

export const Contacts = () => {
  return (
    <ContactsComponent>
      <ContentWrapper>
        <ContactsText>
          <TextPara>{contacts.name}</TextPara>
          <TextPara>{contacts.email}</TextPara>
          <TextPara>{contacts.phone}</TextPara>
          <InstaWrapper>
            <InstaLogo src={instaLogo} alr="instagram logo"></InstaLogo>
            <Link
              href={contacts.instaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contacts.insta}
            </Link>
          </InstaWrapper>
          <p>
            <br></br>
            {contacts.address.map((item) => (
              <TextPara>{item}</TextPara>
            ))}
          </p>
        </ContactsText>
        <MapWrapper>
          <StyledIframe src={contacts.mapSrc} allowfullscreen=""></StyledIframe>
        </MapWrapper>
      </ContentWrapper>
    </ContactsComponent>
  );
};
