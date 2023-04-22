import { useRouter } from "next/router";
import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";

type Props = {};

const Filter = (props: Props) => {
  const { replace, query } = useRouter();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => {
      replace(`/?q=${e.target.value}`, `/?q=${e.target.value}`, {
        shallow: true,
      });
      // if (query.q === "") {
      //   e.target.value = "";
      // }
    },
    500
  );

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search the entire video library"
        defaultValue={query.q as string}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
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
  outline: ;
`;
