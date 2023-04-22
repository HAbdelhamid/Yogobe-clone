import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useCurrentUserQuery } from "../gql/generated";

function Profile() {
  const { data } = useCurrentUserQuery();
  // const [src, setSrc] = useState(data?.currentUser?.assets?.avatar as string);

  return (
    <Container>
      <Avatar
        src={data?.currentUser?.assets?.avatar as string}
        width={140}
        height={140}
        alt=""
        onError={(e) => {
          (e.target as HTMLImageElement).srcset = "./avatar.svg";
        }}
      />

      <Firstname>{data?.currentUser?.firstName}</Firstname>
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
  border-radius: 50%;
`;
const AvatarLoadingSkeleton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  div {
    width: 140px;
    height: 140px;

    border-radius: 50%;
    background: linear-gradient(
      120deg,
      #e5e5e5 30%,
      #f2f2f2 38%,
      #f2f2f2 40%,
      #e5e5e5 48%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load 2s infinite;
  }

  @keyframes load {
    100% {
      background-position: -100% 0;
    }
  }
`;

// useEffect(() => {
//   if (!data?.currentUser) {
//     router.push("/login");
//   } else {
//     setAuthenticated(true);
//   }
// }, [router, data]);

// if (authenticated) {
//   return <Component {...props} />;
// } else {
//   return null;
// }
// const [authenticated, setAuthenticated] = useState<boolean>();
