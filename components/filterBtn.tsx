import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const FilterBtn = () => {
  const route = useRouter();

  const onClickhandler = () => {
    route.push({
      pathname: "/",
      query: { q: "" },
    });
  };

  return (
    <Container>
      <button onClick={onClickhandler}>All</button>
    </Container>
  );
};

export default FilterBtn;

const Container = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-top: 30px;

  button {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    padding: 0.4em;
  }
`;
