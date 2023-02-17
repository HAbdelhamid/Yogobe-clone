import { useMutation, useQuery } from "@apollo/client";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { Favorite } from "@styled-icons/material/Favorite";
import { ADD_FAVORITE } from "../gql/queries/addFavoriteVideo";
import { USER } from "../gql/queries/currentUser";
import { DELETE_FAVORITED_VIDEOS } from "../gql/queries/deleteFavoritedVideo";
import { GET_FAVORITE_VIDEOS } from "../gql/queries/getFavoritedVideo";
import { currentUser, Video } from "../gql/types";
import Modal from "./modal";
import LoginForm from "./loginForm";

type Props = {
  video: Video;
};

const FavoriteBtn = ({ video }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const user = useQuery(USER);
  const currentUserData: currentUser = user.data;
  const favoritedVideos = useQuery(GET_FAVORITE_VIDEOS, {
    variables: {
      id: user?.data?.currentUser?.id,
    },
  });
  const [addFavoriteVideo, { loading: addLoading }] = useMutation(
    ADD_FAVORITE,
    {
      update(cache, { data: { addFavoriteVideo } }) {
        cache.updateQuery(
          {
            query: GET_FAVORITE_VIDEOS,
            variables: {
              id: currentUserData?.currentUser?.id,
            },
          },
          (data) => {
            console.log("updatequery data", data);
            console.log("addfavorited", addFavoriteVideo);
            return {
              getFavoriteVideos: {
                data: [...data.getFavoriteVideos.data, addFavoriteVideo.video],
              },
            };
          }
        );
      },
    }
  );
  const [deleteFavoritedVideo, { loading: deleteLoading }] = useMutation(
    DELETE_FAVORITED_VIDEOS,
    {
      update(cache) {
        cache.updateQuery(
          {
            query: GET_FAVORITE_VIDEOS,
            variables: {
              id: currentUserData?.currentUser?.id,
            },
          },
          (data) => {
            return {
              getFavoriteVideos: {
                data: data.getFavoriteVideos.data.filter(
                  (item: any) => item.id !== video.id
                ),
              },
            };
          }
        );
      },
    }
  );

  const favorites = useMemo(
    () =>
      favoritedVideos.data?.getFavoriteVideos.data.map((item: any) => {
        return item.id;
      }),
    [favoritedVideos]
  );
  const handleFavorite = () => {
    if (!currentUserData.currentUser) {
      console.log("opened", showLoginModal);
      setShowLoginModal(true);
    } else {
      if (favorites?.includes(video.id)) {
        deleteFavoritedVideo({
          variables: {
            videoId: video.id,
          },
        });
      } else {
        addFavoriteVideo({
          variables: {
            videoId: video.id,
          },
        });
      }
    }
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
  };
  return (
    <div>
      <Modal open={showLoginModal} close={handleModalClose}>
        <LoginForm />
      </Modal>
      <FavoriteButton onClick={handleFavorite}>
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
      </FavoriteButton>
    </div>
  );
};

export default FavoriteBtn;

const FavoriteButton = styled.button`
  font-size: 11px;
  color: #242424;
  flex: 0 auto;
  border: none;
  background: none;
  cursor: pointer;
`;

const Strong = styled.strong`
  margin-left: 6px;
`;

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

const FavoriteIcon = styled(Favorite)`
  color: #129edc;
  font-weight: 1em;
`;
