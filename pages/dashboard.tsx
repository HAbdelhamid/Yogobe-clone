import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import {
  CurrentUserDocument,
  useCurrentUserQuery,
  useLastViewedSeassionsQuery,
} from "../gql/generated";
import Cards from "../components/cards";
import cookie from "cookie";
import CardLoadingSkeleton from "../components/cardLoadingSkeleton";
import ProfileMenuList from "../components/profileMenuList";
import { withAuth } from "../gql/auth";

function Dashboard() {
  // const [activeTab, setActiveTab] = useState<string>("dashboard");
  const { data } = useLastViewedSeassionsQuery();

  return (
    <div>
      <Navbar />
      <Container>
        <Profile />
        <ProfileMenuList />
        {!data?.lastWatchedSessions && (
          <LastWatchedVideos>
            <h3>My latest viewed sessions</h3>
            <CardLoadingSkeleton />
          </LastWatchedVideos>
        )}
        {data?.lastWatchedSessions && (
          <LastWatchedVideos>
            <h3>My latest viewed sessions</h3>
            <Cards data={data.lastWatchedSessions} />
          </LastWatchedVideos>
        )}
      </Container>
    </div>
  );
}

export const getServerSideProps = withAuth({
  // add any options for the function here
});
export default Dashboard;

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 20px;
  li:nth-child(1) {
    button {
      color: #56b9e5;
    }
    border-bottom: 2px solid rgb(86, 185, 229);
  }
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
