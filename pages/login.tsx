import React from "react";
import Image from "next/image";
import styled from "styled-components";
import LoginForm from "../components/loginForm";
import Link from "next/link";

const Login = () => {
  return (
    <Container>
      <InfoBox>
        <Infobox>
          <Link href={"/"}>
            <Image src={"/logo.png"} width={120} height={120} alt="" />
          </Link>

          <h2>We are very happy to have you as a member!</h2>
          <p>
            Login and let us inspire, motivate and gudie you to more sustainable
            mental health and wellbeing
          </p>
        </Infobox>
      </InfoBox>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 80%;
  background-image: linear-gradient(
      to right,
      rgb(251, 254, 255) 70%,
      rgba(239, 250, 255, 0.8) 100%
    ),
    url("/login.jpg");
  background-size: cover;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
`;

const Infobox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  height: 100vh;
  background: linear-gradient(
    to right,
    rgba(223, 245, 255, 0.95) 0%,
    rgba(223, 245, 255, 0.95) 60%,
    rgba(223, 245, 255, 0.1) 100%
  );

  p {
    font-size: 20px;
  }
  h2 {
    color: rgb(36, 36, 36);
    font-size: 28px;
  }
`;
