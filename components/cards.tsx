import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import GET_VIDEOS from "../gql/queries/videos";

type character = {
  taxonomies: any;
  thumbnailUrl: string;
  content: {
    title: string;
    shortDescription: string;
  };
  videos: {
    data: {
      id: string;
    };
  };
};

function Cards() {
  // TODO: check the url if it has query param
  // videos/all?q=chihaja&type=video
  // get the value of `q` & `type` ... query params from url
  // use it for search and filter in query
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS, {
    variables: {
      page: 1,
      perPage: 9,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const video = data.videos.data;

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        page: data.videos.page + 1,
      },
    });
  };

  return (
    <>
      <Container>
        {video.map((data: character, index: any) => {
          return (
            <Cardbox key={index}>
              <div>
                <div>
                  <Styledimg
                    src={data.thumbnailUrl}
                    width={300}
                    height={250}
                    alt=""
                  />
                </div>
                <Box key={index}>
                  <h2>{data.content.title}</h2>
                  <p>Yoga with {data.taxonomies.instructors[0]?.name}</p>
                  <p>{data.content.shortDescription}</p>
                  <div>
                    <p>SAVE TO FAVORITES</p>
                  </div>
                </Box>
              </div>
            </Cardbox>
          );
        })}
      </Container>
      <button onClick={handleLoadMore}>Show More</button>
    </>
  );
}

export default Cards;

const Styledimg = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-right-radius: 6px 6px;
  border-top-left-radius: 6px 6px;
`;

const Cardbox = styled.div`
  font-size: 0.8rem;
  display: block;
  border: 0.5px #eeeeee solid;
  border-radius: 6px;

  p {
    margin: 1em auto;
  }
`;

const Container = styled.div`
  display: grid;
  margin: 0px auto;
  max-width: 86%;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 15px;
  margin: 6em auto;
`;

const Box = styled.div`
  padding: 2em;
`;
