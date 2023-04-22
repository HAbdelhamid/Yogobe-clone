import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import ProfileMenuList from "../components/profileMenuList";
import { VideoLibrary } from "@styled-icons/material/VideoLibrary";
import { withAuth } from "../gql/auth";

function Recommandations() {
  return (
    <div>
      <Navbar />
      <Container>
        <Profile />
        <ProfileMenuList />
        <RecommandationVideos>
          <VideoLibrary size={100} color={"#999999"} />
          <h3>No public playlists</h3>
          <p>You have yet to create your first playlist</p>
        </RecommandationVideos>
      </Container>
    </div>
  );
}
export const getServerSideProps = withAuth({
  // add any options for the function here
});
export default Recommandations;

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 20px;
  li:nth-child(2) {
    button {
      color: #56b9e5;
    }
    border-bottom: 2px solid rgb(86, 185, 229);
  }
`;

const RecommandationVideos = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-top: 25px;
    font-weight: 300;
  }
  p {
    margin-top: 15px;
    color: #7d7d7d;
    font-size: 13px;
  }
`;
