import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

function Navbar() {
  return (
    <header>
      <Container>
        <Logo>
          <Link href="/">
            <Image src={"/logo.png"} width={100} height={100} alt="" />
          </Link>
        </Logo>
        <nav>
          <List>
            <Listitem>Play</Listitem>
            <Listitem>LIVE</Listitem>
            <Listitem>Courses</Listitem>
            <Listitem>Store</Listitem>
            <Listitem>More</Listitem>
          </List>
        </nav>
        <Box>
          <Normalbtn>Log in</Normalbtn>
          <Bluebtn>Try for free</Bluebtn>
        </Box>
      </Container>
    </header>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  max-width: 86%;
  max-height: 75px;
`;

const Box = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-basis: 100%;
`;

const Bluebtn = styled.a`
  font-size: 13px;
  padding: 8px 10px;
  margin: 6px;
  border-radius: 3px;
  background: rgb(86, 185, 229);
  color: rgb(255, 255, 255);
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  border: none;
`;

const Normalbtn = styled.button`
  font-size: 13px;
  padding: 8px 10px;
  margin: 6px;
  color: black;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  border: none;
`;

const Logo = styled.div`
  display: flex;
  flex-basis: 20%;
`;

const List = styled.ul`
  display: flex;
`;

const Listitem = styled.li`
  list-style: none;
  padding: 0px 10px;
  margin: 0px;
`;
