import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import {
  useCurrentUserQuery,
  useGetFavoritedQuery,
  useGetFavoriteVideosQuery,
  useLastViewedSeassionsQuery,
} from "../gql/generated";
import Cards from "../components/cards";
import CardLoadingSkeleton from "../components/cardLoadingSkeleton";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const user = useCurrentUserQuery();
  const { data } = useLastViewedSeassionsQuery();
  // const getFavorited = useGetFavoritedQuery({
  //   variables: {
  //     id: user.data?.currentUser?.id as string,
  //   },
  // });
  const getFavoriteVideos = useGetFavoriteVideosQuery({
    variables: {
      id: user.data?.currentUser?.id as string,
    },
  });
  console.log(data);

  // if (
  //   data?.lastWatchedSessions &&
  //   getFavoriteVideos.data?.getFavoriteVideos?.data
  // )
  return (
    <div>
      <Navbar />
      <Container>
        <Profile userId={user.data?.currentUser?.id} />
        <MenuList>
          <ul>
            <li>
              <MenuListButton
                onClick={() => {
                  setActiveTab("dashboard");
                }}
              >
                DASHBOARD
              </MenuListButton>
            </li>
            <li>
              <MenuListButton>RECOMMENDATIONS</MenuListButton>
            </li>
            <li>
              <MenuListButton
                onClick={() => {
                  setActiveTab("myFavorites");
                }}
              >
                MY FAVORITES
              </MenuListButton>
            </li>
            <li>
              <MenuListButton>MY PLAYLISTS</MenuListButton>
            </li>
          </ul>
        </MenuList>
        {activeTab === "dashboard" && !data?.lastWatchedSessions && (
          <LastWatchedVideos>
            <h3>My latest viewed sessions</h3>
            <CardLoadingSkeleton />
          </LastWatchedVideos>
        )}
        {activeTab === "dashboard" && data?.lastWatchedSessions && (
          <LastWatchedVideos>
            <h3>My latest viewed sessions</h3>
            <Cards data={data.lastWatchedSessions} />
          </LastWatchedVideos>
        )}
        {}
        {/* <LastWatchedVideos>
            <h3>My latest viewed sessions</h3>
            <CardLoadingSkeleton />
          </LastWatchedVideos> */}
        {/* <MyFavourites>
            <h3>My favorites</h3>
            <CardLoadingSkeleton />
          </MyFavourites> */}
        {activeTab === "myFavorites" &&
          !getFavoriteVideos.data?.getFavoriteVideos?.data && (
            <MyFavourites>
              <h3>My favorites</h3>
              <CardLoadingSkeleton />
            </MyFavourites>
          )}
        {activeTab === "myFavorites" &&
          getFavoriteVideos.data?.getFavoriteVideos?.data && (
            <MyFavourites>
              <h3>My favorites</h3>
              <Cards data={getFavoriteVideos.data.getFavoriteVideos.data} />
            </MyFavourites>
          )}
      </Container>
    </div>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  justify-content: start;

  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 20px;
`;

const LastWatchedVideos = styled.div`
  margin-top: 50px;
  h3 {
    font-weight: 400;
    color: #242424;
    margin-top: 30px;
    margin-bottom: 30px;
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
