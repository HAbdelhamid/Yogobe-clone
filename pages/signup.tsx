import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import SignupForm from "../components/signupForm";
import LoginModal from "../components/loginModal";
import Link from "next/link";

const SignUp = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleClick = () => {
    setShowLoginModal(true);
  };
  const handleModalClose = () => {
    setShowLoginModal(false);
  };
  return (
    <Container>
      <LoginModal open={showLoginModal} close={handleModalClose} />
      <InfoBox>
        <Infobox>
          <Link href={"/"}>
            <Image src={"/logo.png"} width={120} height={120} alt="" />
          </Link>
          <h2>Explore yoga, meditation, movement and breathing!</h2>
          <p>
            Create an account to watch, save and favorite thousands of videos
          </p>
          <p>Free trial, no binding period, no bank details requried</p>
        </Infobox>
      </InfoBox>
      <SignupBox>
        <SignupForm />
        <LoginOption>
          Already a member? <LoginBtn onClick={handleClick}>Log in</LoginBtn>
        </LoginOption>
      </SignupBox>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const LoginOption = styled.p`
  padding-top: 20px;
  font-size: 14px;
  font-weight: 600px;
`;

const LoginBtn = styled.button`
  background: none;
  border: none;
  color: #56b9e5;
  font-size: 14px;
  cursor: pointer;
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

const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
`;
