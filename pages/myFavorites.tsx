import { Router, useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import CardLoadingSkeleton from "../components/cardLoadingSkeleton";
import Cards from "../components/cards";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import ProfileMenuList from "../components/profileMenuList";
import {
  useCurrentUserQuery,
  useGetFavoriteVideosQuery,
} from "../gql/generated";
import { withAuth } from "../gql/auth";

function MyFavorites() {
  const router = useRouter();
  const user = useCurrentUserQuery();
  const getFavoriteVideos = useGetFavoriteVideosQuery({
    variables: {
      id: user.data?.currentUser?.id as string,
    },
  });
  return (
    <div>
      <Navbar />
      <Container>
        <Profile />
        <ProfileMenuList />
        {!getFavoriteVideos.data?.getFavoriteVideos?.data && (
          <MyFavourites>
            <h3>My favorites</h3>
            <CardLoadingSkeleton />
          </MyFavourites>
        )}
        {getFavoriteVideos.data?.getFavoriteVideos?.data && (
          <MyFavourites>
            <h3>My favorites</h3>
            <Cards data={getFavoriteVideos.data.getFavoriteVideos.data} />
          </MyFavourites>
        )}
      </Container>
    </div>
  );
}

export const getServerSideProps = withAuth({
  // add any options for the function here
});

export default MyFavorites;

const Container = styled.div`
  display: flex;
  justify-content: start;

  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 20px;
  li:nth-child(3) {
    button {
      color: #56b9e5;
    }

    border-bottom: 2px solid rgb(86, 185, 229);
  }
`;

const MyFavourites = styled.div`
  margin-top: 50px;
  h3 {
    font-weight: 400;
    color: #242424;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const MenuList = styled.div`
  display: flex;
  padding: 15px;
  margin-top: 50px;
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  ul {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
  }
  li {
    display: flex;
    list-style: none;
  }
  button:hover {
    color: #56b9e5;
    // border-bottom: solid 1px #56b9e5;
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
