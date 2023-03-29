import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Profile from "../../components/profile";

function Dashboard() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <Container>
        <Profile userId={id} />
      </Container>
    </div>
  );
}

export default Dashboard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 2em auto;
  padding: 0 1em;
`;
