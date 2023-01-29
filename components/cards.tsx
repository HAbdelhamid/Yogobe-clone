import React from "react";
import styled from "styled-components";
import { Video } from "../gql/types";
import Card from "./card";

type Props = {
  data: {
    videos: {
      totalCount: number;
      data: Video[];
    };
  };
  loadMore: () => void;
};

const Cards = ({ loadMore, data }: Props) => {
  // TODO: check the url if it has query param
  // videos/all?q=chihaja&type=video
  // get the value of `q` & `type` ... query params from url
  // use it for search and filter in query

  return (
    <>
      <ResultsCount>{data.videos.totalCount} results</ResultsCount>
      <Container>
        {data.videos.data.map((video, index) => (
          <Card key={index} video={video} />
        ))}
      </Container>
      <LoadMoreButton onClick={loadMore}>Show More</LoadMoreButton>
    </>
  );
};

export default Cards;

const ResultsCount = styled.div`
  display: flex;
  justify-content: start;
  width: 86%;
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 13px;
  font-weight: 600;
`;

const LoadMoreButton = styled.button`
  background-color: rgb(86, 185, 229);
  border: none;
  border-radius: 8px;
  padding: 1em;
  margin: 3em auto;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  margin: 0px auto;
  max-width: 86%;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 15px;
`;
