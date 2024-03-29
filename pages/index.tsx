import Head from "next/head";
import Cards from "../components/cards";
import styled from "styled-components";
import Filter from "../components/filter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilterBtn from "../components/filterBtn";
import Navbar from "../components/navbar";
import client from "../gql/apolloclient";
import {
  GetvideosDocument,
  GetvideosQuery,
  useCurrentUserQuery,
  useGetvideosQuery,
} from "../gql/generated";

type Props = {
  data: GetvideosQuery;
};

const HomePage = (props: Props) => {
  const [showLoadMore, setShowLoadMore] = useState<boolean>();
  const [totalCountChanged, setTotalCountChanged] = useState<boolean>();
  const { query } = useRouter();
  const user = useCurrentUserQuery();

  const { data, error, fetchMore, refetch, loading } = useGetvideosQuery({
    variables: {
      perPage: 9,
      query: "",
    },
  });

  const Videos = data?.videos?.data || props.data?.videos?.data;
  const totalCount = data?.videos?.totalCount || props.data?.videos?.totalCount;
  const nextPage = data?.videos?.page || props.data?.videos?.page;

  useEffect(() => {
    if (totalCount > Videos.length) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  }, [totalCount, Videos.length]);

  useEffect(() => {
    if (!query.q) {
      setTotalCountChanged(false);
    }
    refetch({ query: query.q as string }).then(() => {
      if (!query.q) {
        setTotalCountChanged(false);
      } else {
        setTotalCountChanged(true);
      }
    });
  }, [query, refetch]);

  if (loading && !Videos) return null;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Head>
        <title>Yogobe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <Filter />
        <FilterBtn />
        <ResultsCount>
          {totalCount} results
          {totalCountChanged && ` for keyword "${query.q}"`}
        </ResultsCount>
        <Cards
          loadMore={() => {
            return fetchMore({
              variables: {
                page: nextPage + 1,
              },
            });
          }}
          data={Videos}
          showLoadMoreBtn={showLoadMore}
        />
      </Container>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await client.query<GetvideosQuery>({
    query: GetvideosDocument,
    variables: {
      perPage: 9,
      query: "",
    },
  });

  return {
    props: {
      data,
    },
  };
};

export default HomePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 20px;
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
