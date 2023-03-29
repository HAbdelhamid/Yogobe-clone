import React, { useState } from "react";
import styled from "styled-components";
import {
  LastViewedSeassionsQuery,
  VideosDataFieldFragment,
} from "../gql/generated";

import Card from "./card";

type Props = {
  loadMore?: () => Promise<any>;
  data?: VideosDataFieldFragment[];
  // GetvideosQuery["videos"]["data"]
  showLoadMoreBtn?: boolean | undefined;
};

const Cards = ({ loadMore, data, showLoadMoreBtn }: Props) => {
  const [loading, setLoading] = useState(false);
  // const favoritedVideos = useGetFavoritedQuery({
  //   variables: {
  //     id: user?.data?.currentUser?.id,
  //   },
  // });

  const handleLoadMore = () => {
    setLoading(true);
    loadMore().then(() => {
      setLoading(false);
    });
  };
  // if (loading) return null;
  // if (error) return `Error! ${error.message}`;
  return (
    <>
      <Container>
        {data?.map((video, index) => (
          <Card key={index} video={video} />
        ))}
      </Container>

      {showLoadMoreBtn && (
        <LoadMoreButton onClick={handleLoadMore}>
          {loading ? <SpinnerStyles /> : "Load More"}
        </LoadMoreButton>
      )}
    </>
  );
};

// Cards.defaultProps = {
//   loadMore: "",
//   data: "",
//   showLoadMoreBtn: "",
// };

export default Cards;

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

const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: rgb(86, 185, 229);
  border: none;
  border-radius: 8px;
  padding: 1.4em 2em;
  margin: 3em auto;
  cursor: pointer;
  min-width: 120px;
  max-height: 50px;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  margin: 0px auto;
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
