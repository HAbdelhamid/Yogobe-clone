import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { PlayCircleOutline } from "@styled-icons/evaicons-outline/PlayCircleOutline";
import { CameraVideo } from "@styled-icons/bootstrap/CameraVideo";
// const playIcon = styled(PlayCircleOutline)``;

function Navbar() {
  return (
    <header>
      <Container>
        <Logo>
          <Link href="/">
            <Image src={"/logo.png"} width={100} height={100} alt="" />
          </Link>
        </Logo>
        <StyledNav>
          <List>
            <Listitem>
              <PlayCircleOutline size="15" /> Play
            </Listitem>
            <Listitem>
              <CameraVideo size="15" /> LIVE
            </Listitem>
            <Listitem>Courses</Listitem>
            <Listitem>Store</Listitem>
            <Listitem>More</Listitem>
          </List>
        </StyledNav>
        <Box>
          <Link href={"/login"}>
            <Normalbtn>Log in</Normalbtn>
          </Link>
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

const Logo = styled.div`
  display: flex;
  flex-basis: 0%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  flex-basis: 40%;
  font-size: 14px;
  font-weight: bold;
`;

const Box = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-basis: 60%;
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

const List = styled.ul`
  display: flex;
`;

const Listitem = styled.li`
  display: flex;
  list-style: none;
  padding: 0px 15px;
  margin: 0px;
  svg {
    margin-right: 5px;
  }
`;
