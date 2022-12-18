import React from "react";
import { Title, Head } from "./Header.styled";

function Header() {
  return (
    <Head>
      <Title>Welcome to Memory Game</Title>
    </Head>
  );
}

export default React.memo(Header);