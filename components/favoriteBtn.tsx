import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { Favorite } from "@styled-icons/material/Favorite";
import LoginModal from "./loginModal";
import {
  AddFavoritedVideoMutation,
  GetFavoritedDocument,
  GetFavoritedQuery,
  useAddFavoritedVideoMutation,
  useCurrentUserQuery,
  useDeleteFavoriteVideoMutation,
  useGetFavoritedQuery,
  Video,
  VideosDataFieldFragment,
} from "../gql/generated";
import { GetFavoriteVideos, Videos } from "../gql/types";
import { ApolloCache } from "@apollo/client";

type Props = {
  video: VideosDataFieldFragment;
};

// type Data = {
//   cache: ApolloCache<any>;
//   data: {
//     addFavoriteVideoData: AddFavoritedVideoMutation;
//   };
// };

const FavoriteBtn = ({ video }: Props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const user = useCurrentUserQuery();
  const currentUserData = user?.data;
  const favoritedVideos = useGetFavoritedQuery({
    variables: {
      id: user?.data?.currentUser?.id as string,
    },
  });
  const [addFavoriteVideo, { loading: addLoading }] =
    useAddFavoritedVideoMutation({
      update(cache, { data: addFavoriteVideo }) {
        cache.updateQuery(
          {
            query: GetFavoritedDocument,
            variables: {
              id: currentUserData?.currentUser?.id,
            },
          },
          (data) => {
            return {
              getFavoriteVideos: {
                data: [
                  ...(data?.getFavoriteVideos?.data ?? []),
                  addFavoriteVideo?.addFavoriteVideo?.video,
                ],
              },
            };
          }
        );
      },
    });
  const [deleteFavoritedVideo, { loading: deleteLoading }] =
    useDeleteFavoriteVideoMutation({
      update(cache) {
        cache.updateQuery(
          {
            query: GetFavoritedDocument,
            variables: {
              id: currentUserData?.currentUser?.id,
            },
          },
          (data) => {
            return {
              getFavoriteVideos: {
                data: data?.getFavoriteVideos?.data.filter(
                  (item: any) => item.id !== video.id
                ),
              },
            };
          }
        );
      },
    });

  const favorites = useMemo(
    () =>
      favoritedVideos?.data?.getFavoriteVideos?.data.map((item) => {
        return item.id;
      }),
    [favoritedVideos]
  );
  const handleFavorite = () => {
    if (!currentUserData?.currentUser) {
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
      <LoginModal open={showLoginModal} close={handleModalClose} />
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
