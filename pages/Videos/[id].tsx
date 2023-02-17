import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import videojs from "video.js";
import FavoriteBtn from "../../components/favoriteBtn";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import Navbar from "../../components/navbar";
import VideoJS from "../../components/videojs";
import { GET_VIDEO } from "../../gql/queries/getVideo";

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data, error } = useQuery(GET_VIDEO, {
    variables: {
      id: id,
    },
  });
  const playerRef = React.useRef(null);

  if (loading) return null;
  if (error) return `Error! ${error.message}`;

  const { hls, title, longDescription } = data.video || {};
  console.log("videos data", data, hls);

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `${hls}`,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Video>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          <VideoDetails>
            <Wrap>
              <Title>
                <h1>{title}</h1>
              </Title>
              <Description>{longDescription}</Description>
              <Taxonomies>
                <div>
                  <a href="#">{data.video.primaryStyle.name}</a> With{" "}
                  <a href="#">{data.video.taxonomies.instructors[0].name}</a>
                </div>
                <dl>
                  <dt>Duration:</dt>
                  <dd>{data.video.minutes}min</dd>
                </dl>
                <dl>
                  <dt>Needs:</dt>
                  <dd>{data.video.taxonomies.needs[0].name}</dd>
                </dl>
              </Taxonomies>
              <ActionsContainer>
                <FavoriteBtn video={data.video} />
                <MenuButton>
                  <ThreeDots size="25" />
                </MenuButton>
              </ActionsContainer>
            </Wrap>
          </VideoDetails>

          <div></div>
        </Video>

        <RelatedVideos>
          <h5>Related Videos</h5>
          <div></div>
        </RelatedVideos>
      </Container>
    </>
  );
};

export default VideoPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 155px;
  margin-top: 40px;
`;

const RelatedVideos = styled.div``;

const Video = styled.div`
  display: block;
  width: 80%;
`;

const Wrap = styled.div`
  margin: 0px 0px 20px;
  min-width: 0px;
  flex-wrap: wrap;
  align-items: flex-start;
  display: flex;
`;
const VideoDetails = styled.div`
  margin-top: 30px;
`;
const Title = styled.div`
  display: block;
  margin: 0px;
  min-width: 0px;
  order: 1;
  flex: 0 1 100%;

  h1 {
    font-size: 18px;
    color: rgb(36, 36, 36);
    font-weight: 300;
    margin: 0px;
  }
`;
const Description = styled.div`
  display: block;
  margin: 10px 0px 0px;
  min-width: 0px;
  order: 2;
  flex: 0 1 60%;
  border-right: 1px solid rgb(238, 238, 238);
  font-size: 13px;
  color: #7d7d7d;
`;

const Taxonomies = styled.div`
  margin: 13px 0px 20px;
  min-width: 0px;
  order: 3;
  flex: 0 1 calc(40% - 30px);
  flex-wrap: wrap;
  padding-left: 30px;

  a {
    color: #129edc;
  }

  dl {
    display: flex;
    overflow: hidden;
    font-size: 13px;
    color: rgb(125, 125, 125);
    line-height: 24px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin: 0px;
  }
  dd {
    display: block;
    margin-inline-start: 40px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  margin: 15px 0px;
  width: 60%;
  order: 4;
`;

const MenuButton = styled.div``;
