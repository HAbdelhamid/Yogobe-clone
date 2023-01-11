import React from "react";
import Image from "next/image";
import styled from "styled-components";

function login() {
  return (
    <Container>
      <Boxinfo>
        <Infobox>
          <Image src={"/logo.png"} width={120} height={120} alt="" />
          <h2>We are very happy to have you as a member!</h2>
          <p>
            Login and let us inspire, motivate and gudie you to more sustainable
            mental health and wellbeing
          </p>
        </Infobox>
      </Boxinfo>
      <Boxlogin>
        <Loginbox>
          <h1>Log in</h1>
          <p>
            Log in to access to our video library, online courses and your
            profile
          </p>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Log in</button>
        </Loginbox>
      </Boxlogin>
    </Container>
  );
}

export default login;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const Boxinfo = styled.div`
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

const Boxlogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
`;

const Loginbox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;

  input {
    padding: 1em;
    margin: 0.4em 0em;
    border-radius: 3px;
    background: white;
    border: 1px solid rgb(221, 221, 221);
    max-width: 100%;
    outline: 0px;
  }

  button {
    background: #56b9e5;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 1em;
    max-width: 100%;
    margin: 0.4em 0em;
  }
  p {
    margin: 0.3em 0em;
    font-size: 12px;
  }
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
