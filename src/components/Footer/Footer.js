import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { Author, FooterStyled, Social, Socials } from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <Socials>
        <Social href={"https://github.com/muhtomakin"} target="_blank">
          <AiFillGithub />
        </Social>
        <Social
          href={"https://www.linkedin.com/in/muhammed-tomakin/"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Social>
      </Socials>
      <Author>Created by Toma</Author>
    </FooterStyled>
  );
}

export default React.memo(Footer);