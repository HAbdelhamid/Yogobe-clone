import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { PlayCircleOutline } from "@styled-icons/evaicons-outline/PlayCircleOutline";
import { CameraVideo } from "@styled-icons/bootstrap/CameraVideo";
import LogoutButton from "./logoutBtn";
import { useCurrentUserQuery } from "../gql/generated";
import { ChevronDown } from "@styled-icons/bootstrap/ChevronDown";

type Props = {
  animation?: string;
  transform?: string;
  transition?: string;
  userDataUpdate?: any;
};

function Navbar({ userDataUpdate }: Props) {
  const [showDropDown, setShowDropDown] = useState(false);
  // const [changeClassName, setChangeClassName] = useState<boolean>(false);
  const { loading, data, refetch } = useCurrentUserQuery();

  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    refetch();
    const handler = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
        {loading ? (
          <UserLoadingSkeleton>
            <p></p>
            <div></div>
          </UserLoadingSkeleton>
        ) : (
          <Box>
            {data?.currentUser ? (
              <>
                <p>{data.currentUser.firstName}</p>
                <Avatar
                  src={data.currentUser.assets?.avatar as string}
                  alt=""
                  width={40}
                  height={40}
                  onError={(e) => {
                    (e.target as HTMLImageElement).srcset = "./avatar.svg";
                  }}
                />
                <div ref={popupRef}>
                  <DropDownBtn
                    onClick={() => setShowDropDown(!showDropDown)}
                    open={showDropDown}
                  >
                    <DownArrow size={15} color={"blue"} />
                  </DropDownBtn>

                  {showDropDown && (
                    <UserDropDown open={showDropDown}>
                      <ul>
                        <li>
                          <Link href={`/dashboard`}>Dashboard</Link>
                        </li>
                        <li>
                          <Link href={`/myFavorites`}>My Favorites</Link>
                        </li>
                        <li>
                          <Link href={`/recommandations`}>Recommandations</Link>
                        </li>
                        <li>
                          <Link href={`/playlists`}>Playlists</Link>
                        </li>
                        <li>
                          <Link href={`/settings`}>Settings</Link>
                        </li>
                        <li>
                          <LogoutButton />
                        </li>
                      </ul>
                    </UserDropDown>
                  )}
                </div>

                {/* <LogoutButton /> */}
              </>
            ) : (
              <>
                <Link href={"/login"}>
                  <Normalbtn>Log in</Normalbtn>
                </Link>
                <Link href={"/signup"}>
                  <Bluebtn>Try for free</Bluebtn>
                </Link>
              </>
            )}
          </Box>
        )}
      </Container>
    </header>
  );
}

export default Navbar;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0px auto;
  padding: 0 20px;
  max-width: 1280px;
  max-height: 75px;
`;

const DownArrow = styled(ChevronDown)`
  color: #56b9e5;
`;

const DropDownBtn = styled.button<{ open: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
  transform: ${(props) =>
    props.open ? "rotate3d(1, 0, 0, 180deg);" : "rotate3d(1, 0, 0, 0deg);"};
  transition: transform 0.2s ease-in-out 0s, opacity 0.3s ease 0s;
`;

const UserDropDown = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: start;
  position: absolute;
  right: 0;
  top: 100%;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  width: 250px;
  background: white;
  opacity: 0;
  z-index: 100;

  ul {
    width: 100%;
  }
  li {
    list-style: none;
    padding: 20px 30px;
    font-size: 14px;
  }
  li:last-child {
    border-top: 1px solid rgb(238, 238, 238);
  }
  transform-origin: right top;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: ${(props) =>
    props.open ? "dropdown-open" : "dropdown-closed"};

  @keyframes dropdown-open {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes dropdown-closed {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.7);
    }
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const UserLoadingSkeleton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-basis: 60%;
  p {
    margin-right: 20px;
    width: 20%;
    height: 20px;

    border-radius: 3px;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      #f2f2f2 38%,
      #f2f2f2 40%,
      #e5e5e5 48%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load 2s infinite;
  }
  
  div{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      #f2f2f2 38%,
      #f2f2f2 40%,
      #e5e5e5 48%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load 2s infinite;
  }
  @keyframes load {
    100% {
      background-position: -100% 0;
    }
  }
  }
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
  p {
    margin-right: 20px;
  }
`;

const Bluebtn = styled.button`
  font-size: 13px;
  padding: 8px 10px;

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
