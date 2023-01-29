import { useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import GET_VIDEOS from "../gql/queries/videos";

const Filter = () => {
  const { loading, error, data, fetchMore, refetch } = useQuery(GET_VIDEOS);

  const onClickhandler = () => {
    // let searchParams = new URLSearchParams(window.location.search);
    // searchParams.set("q", e.target.value);
    // if (window.history.replaceState) {
    //   const url =
    //     window.location.protocol +
    //     "//" +
    //     window.location.host +
    //     window.location.pathname +
    //     "?" +
    //     searchParams.toString();
    //   window.history.replaceState(
    //     {
    //       path: url,
    //     },
    //     "",
    //     url
    //   );
    // }
    // refetch({ query: e.target.value });
  };

  return (
    <Container>
      <button onClick={onClickhandler}></button>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Searchinput = styled.input`
  width: 86%;
  height: 100%;
  padding: 21px 0px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 15px center;
  border: 1px solid rgb(234, 234, 234);
  text-indent: 45px;
  font-weight: 300;
  color: rgb(36, 36, 36);
  font-size: 14px;
  transition: border 200ms ease-in 0s;
`;
