import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import videojs from "video.js";
import FavoriteBtn from "../../components/favoriteBtn";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import Navbar from "../../components/navbar";
import VideoJS from "../../components/videojs";

import Image from "next/image";
import Link from "next/link";
import client from "../../gql/apolloclient";

import ReactHtmlParser from "react-html-parser";
import {
  GetVideoDocument,
  useGetRelatedVideosQuery,
  Video,
} from "../../gql/generated";
import RelatedVideosLoaddingSkeleton from "../../components/relatedVideosLoaddingSkeleton";

type Props = {
  data: {
    video: Video;
  };
};

const VideoPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const relatedVideo = useGetRelatedVideosQuery({
    variables: {
      id: id as string,
    },
  });

  const playerRef = React.useRef(null);

  const { data } = props;

  const { hls, title, longDescription } = data.video;

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
    autoplay: false,
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

  const skeletons = [];
  for (let i = 0; i < 4; i++) {
    skeletons.push(<RelatedVideosLoaddingSkeleton key={i} />);
  }

  return (
    <>
      <Navbar />
      <Container>
        <VideoSection>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          <VideoDetails>
            <Wrap>
              <Title>
                <h1>{title}</h1>
              </Title>
              <Description>{ReactHtmlParser(longDescription)}</Description>
              <Taxonomies>
                <div>
                  <a href="#">{data?.video?.primaryStyle?.name}</a> With{" "}
                  <a href="#">
                    {data?.video?.taxonomies?.instructors?.[0]?.name}
                  </a>
                </div>
                <dl>
                  <dt>Duration:</dt>
                  <dd>{data.video.minutes}min</dd>
                </dl>
                <dl>
                  <dt>Needs:</dt>
                  <dd>{data.video?.taxonomies?.needs?.[0]?.name}</dd>
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
        </VideoSection>

        <RelatedVideosSection>
          <h5>Related Videos</h5>
          {relatedVideo.loading ? (
            <>{skeletons}</>
          ) : (
            <div>
              {relatedVideo?.data?.relatedVideos?.map(
                (video, index: number) => {
                  return (
                    <Link key={index} href={`/Videos/${video?.identifier}`}>
                      <Box>
                        <div>
                          <ImageContainer>
                            <Duration>{video?.minutes} min</Duration>
                            <ThumbnailImage
                              src={video?.thumbnailUrl as string}
                              alt=""
                              width={110}
                              height={60}
                            />
                          </ImageContainer>
                        </div>

                        <div>
                          <h5>{video?.title.slice(0, 20)}</h5>
                          <ShortDescription>
                            {video?.shortDescription.slice(0, 45)}
                          </ShortDescription>
                        </div>
                      </Box>
                    </Link>
                  );
                }
              )}
            </div>
          )}
        </RelatedVideosSection>
      </Container>
    </>
  );
};

export async function getServerSideProps(context: { query: { id: any } }) {
  const id = context.query.id;
  // Fetch data from external API
  const { data } = await client.query({
    query: GetVideoDocument,
    variables: {
      id: id,
    },
  });
  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}

export default VideoPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 155px;
  margin-top: 40px;
`;

// const LoadingSkeletonShortDescription = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const RelatedVideosSection = styled.div`
  width: 30%;
  padding-left: 20px;

  h5 {
    margin-bottom: 10px;
  }
`;

const ShortDescription = styled.p`
  font-size: 13px;
  font-weight: 400;
`;

const ThumbnailImage = styled(Image)``;
const Duration = styled.span`
  position: absolute;
  background: black;
  bottom: 5px;
  right: 1px;
  color: white;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  font-size: 11px;
`;

const VideoSection = styled.div`
  display: block;
  width: 70%;
`;

const Box = styled.div`
  display: flex;
  margin-bottom: 10px;

  p {
    font-size: 13px;
    font-weight: 300;
    color: #7d7d7d;
  }
  h5 {
    font-size: 13;
    font-weight: 600;
  }
`;

const ImageContainer = styled.div`
  margin-right: 10px;
  position: relative;
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

  a {
    color: #129edc;
  }
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
