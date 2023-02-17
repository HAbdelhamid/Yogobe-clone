import styled from "styled-components";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { Favorite } from "@styled-icons/material/Favorite";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { PlayCircle } from "@styled-icons/bootstrap/PlayCircle";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { currentUser, Video } from "../gql/types";
import { ADD_FAVORITE } from "../gql/queries/addFavoriteVideo";
import { GET_FAVORITE_VIDEOS } from "../gql/queries/getFavoritedVideo";
import { DELETE_FAVORITED_VIDEOS } from "../gql/queries/deleteFavoritedVideo";
import Modal from "./modal";
import LoginForm from "./loginForm";
import Link from "next/link";
import { USER } from "../gql/queries/currentUser";
import FavoriteBtn from "./favoriteBtn";

type Props = {
  video: Video;
  favoritedVideos: any;
  // currentUserData: currentUser;
};

const Card = ({ video }: Props) => {
  // const [showLoginModal, setShowLoginModal] = useState(false);
  const route = useRouter();
  // const user = useQuery(USER);
  // const favoritedVideos = useQuery(GET_FAVORITE_VIDEOS, {
  //   variables: {
  //     id: user?.data?.currentUser?.id,
  //   },
  // });
  // const [addFavoriteVideo, { loading: addLoading }] = useMutation(
  //   ADD_FAVORITE,
  //   {
  //     update(cache, { data: { addFavoriteVideo } }) {
  //       cache.updateQuery(
  //         {
  //           query: GET_FAVORITE_VIDEOS,
  //           variables: {
  //             id: currentUserData?.currentUser?.id,
  //           },
  //         },
  //         (data) => {
  //           console.log("updatequery data", data);
  //           console.log("addfavorited", addFavoriteVideo);
  //           return {
  //             getFavoriteVideos: {
  //               data: [...data.getFavoriteVideos.data, addFavoriteVideo.video],
  //             },
  //           };
  //         }
  //       );
  //     },
  //   }
  // );
  // const [deleteFavoritedVideo, { loading: deleteLoading }] = useMutation(
  //   DELETE_FAVORITED_VIDEOS,
  //   {
  //     update(cache) {
  //       cache.updateQuery(
  //         {
  //           query: GET_FAVORITE_VIDEOS,
  //           variables: {
  //             id: currentUserData?.currentUser?.id,
  //           },
  //         },
  //         (data) => {
  //           return {
  //             getFavoriteVideos: {
  //               data: data.getFavoriteVideos.data.filter(
  //                 (item: any) => item.id !== video.id
  //               ),
  //             },
  //           };
  //         }
  //       );
  //     },
  //   }
  // );

  // const currentUserData: currentUser = user.data;

  // const favorites = useMemo(
  //   () =>
  //     favoritedVideos.data?.getFavoriteVideos.data.map((item: any) => {
  //       return item.id;
  //     }),
  //   [favoritedVideos]
  // );

  // const handleFavorite = () => {
  //   if (!currentUserData.currentUser) {
  //     console.log("opened", showLoginModal);
  //     setShowLoginModal(true);
  //   } else {
  //     if (favorites?.includes(video.id)) {
  //       deleteFavoritedVideo({
  //         variables: {
  //           videoId: video.id,
  //         },
  //       });
  //     } else {
  //       addFavoriteVideo({
  //         variables: {
  //           videoId: video.id,
  //         },
  //       });
  //     }
  //   }
  // };

  return (
    <>
      <CardBox>
        <ImageContainer>
          <Link href={`/Videos/${video.identifier}`}>
            {video.taxonomies.flavor && (
              <TaxonomyTag>{video.taxonomies.flavor.name}</TaxonomyTag>
            )}
            <PlayButton>
              <PlayCircleIcon size="70" />
            </PlayButton>
            <Duration>{video.meta.minutes} min</Duration>

            <ThumbnailImage
              src={video.thumbnailUrl}
              width={300}
              height={250}
              alt="hi"
            />
          </Link>
        </ImageContainer>
        <Box>
          <h2>{video.content.title}</h2>
          <p>
            <StyledLink
              onClick={() => {
                route.push({
                  pathname: "/",
                  query: { q: video.primaryStyle.name },
                });
              }}
            >
              {video.primaryStyle && video.primaryStyle.name}
            </StyledLink>{" "}
            with{" "}
            <StyledLink>{video.taxonomies.instructors[0]?.name}</StyledLink>
          </p>
          <Description>{video.content.shortDescription}</Description>
          {/* {isLogged && <p style={{ color: "red" }}>{isLogged}</p>} */}
          <ActionsContainer>
            <FavoriteBtn video={video} />
            {/* <FavoriteButton onClick={handleFavorite}>
              {favorites?.includes(video.id) ? (
                <>
                  {deleteLoading ? (
                    <SpinnerStyles />
                  ) : (
                    <>
                      <FavoriteIcon size="18" /> <Strong>SAVED</Strong>
                    </>
                  )}
                </>
              ) : (
                <>
                  {addLoading ? (
                    <SpinnerStyles />
                  ) : (
                    <>
                      <FavoriteBorder size="18" />
                      <Strong>SAVE TO FAVORITE</Strong>
                    </>
                  )}
                </>
              )}
            </FavoriteButton> */}
            <MenuButton>
              <ThreeDots size="25" />
            </MenuButton>
          </ActionsContainer>
        </Box>
      </CardBox>
    </>
  );
};

export default Card;

const SpinnerStyles = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.8s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Strong = styled.strong`
  margin-left: 6px;
`;

const Duration = styled.span`
  position: absolute;
  right: 6px;
  bottom: 6px;
  background: black;
  color: white;
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PlayCircleIcon = styled(PlayCircle)`
  color: white;
  font-weight: 1em;
`;

const FavoriteIcon = styled(Favorite)`
  color: #129edc;
  font-weight: 1em;
`;

const StyledLink = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: #129edc;
  background: none;
  border: none;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  color: #7d7d7d;
`;

const FavoriteButton = styled.button`
  font-size: 11px;
  color: #242424;
  flex: 0 auto;
  border: none;
  background: none;
  cursor: pointer;
`;

const TaxonomyTag = styled.span`
  position: absolute;
  // right: 80%;
  // bottom: 80%;
  background: #454857;
  color: white;
  font-size: 11px;
  padding: 5px;
  margin: 7px;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const MenuButton = styled.div``;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-right-radius: 6px 6px;
  border-top-left-radius: 6px 6px;
`;

const CardBox = styled.div`
  font-size: 0.8rem;
  display: block;
  border: 0.5px #eeeeee solid;
  border-radius: 6px;

  h2 {
    font-size: 16px;
  }

  p {
    margin: 1em auto;
  }
`;

const Box = styled.div`
  padding: 2em;
`;
