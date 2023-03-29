import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useGetUserDataQuery } from "../gql/generated";

type Props = {
  userId: string | undefined;
};
function Profile({ userId }: any) {
  console.log(userId);
  const { data } = useGetUserDataQuery({
    variables: {
      id: userId,
    },
  });
  console.log("userData", data);

  return (
    <Container>
      <Avatar
        src={
          data?.getUser?.assets?.avatar
            ? data?.getUser?.assets?.avatar
            : "/avatar.svg"
        }
        width={160}
        height={160}
        alt=""
      />
      <Firstname>{data?.getUser?.firstName}</Firstname>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Firstname = styled.p`
  font-size: 22px;
  color: black;
  margin-left: 25px;
`;

const Avatar = styled(Image)`
  img {
    border-radius: 50%;
  }
`;
