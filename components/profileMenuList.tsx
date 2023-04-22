import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

function ProfileMenuList() {
  const router = useRouter();

  return (
    <div>
      <MenuList>
        <ul>
          <li>
            <MenuListButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              DASHBOARD
            </MenuListButton>
          </li>
          <li>
            <MenuListButton
              onClick={() => {
                router.push("/recommandations");
              }}
            >
              RECOMMENDATIONS
            </MenuListButton>
          </li>
          <li>
            <MenuListButton
              onClick={() => {
                router.push("/myFavorites");
              }}
            >
              MY FAVORITES
            </MenuListButton>
          </li>
          <li>
            <MenuListButton
              onClick={() => {
                router.push("/playlists");
              }}
            >
              MY PLAYLISTS
            </MenuListButton>
          </li>
        </ul>
      </MenuList>
    </div>
  );
}

export default ProfileMenuList;

const MenuList = styled.div`
  display: flex;
  padding: 15px;
  margin-top: 50px;
  width: 100%;

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  }
  li {
    margin-right: 50px;
    display: flex;
    list-style: none;
    padding-bottom: 9px;
  }
`;

const MenuListButton = styled.button`
  border: none;
  background: none;
  color: #7d7d7d;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
`;
