import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import styled from "styled-components";
import client from "../gql/apolloclient";
import { USER } from "../gql/queries/currentUser";
import { GET_FAVORITE_VIDEOS } from "../gql/queries/getFavoritedVideo";
import GET_VIDEOS from "../gql/queries/getVideos";
import { Video } from "../gql/types";
import Card from "./card";

type Props = {
  loadMore: () => Promise<any>;
  data: {
    videos: {
      totalCount: number;
      data: Video[];
    };
  };
};

const Cards = ({ loadMore, data }: Props) => {
  // console.log(data);
  const [loading, setLoading] = useState(false);
  const user = useQuery(USER);
  // const { data } = useQuery(GET_VIDEOS, {
  //   variables: {
  //     perPage: 9,
  //     query: "",
  //   },
  // });
  const favoritedVideos = useQuery(GET_FAVORITE_VIDEOS, {
    variables: {
      id: user?.data?.currentUser?.id,
    },
  });

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
      <ResultsCount>{data?.videos.totalCount} results</ResultsCount>
      <Container>
        {data?.videos.data.map((video, index) => (
          <Card key={index} video={video} favoritedVideos={favoritedVideos} />
        ))}
      </Container>

      <LoadMoreButton onClick={handleLoadMore}>
        {loading ? <SpinnerStyles /> : "Load More"}
      </LoadMoreButton>
    </>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const { data } = await client.query({
//     query: GET_VIDEOS,
//     variables: {
//       perPage: 9,
//       query: "",
//     },
//   });

//   // Pass data to the page via props
//   return { props: { data } };
// }
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

const ResultsCount = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 13px;
  font-weight: 600;
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
