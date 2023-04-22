import React from "react";
import styled from "styled-components";
import { useAuthenticationMutation, useLoginMutation } from "../gql/generated";
type FromFields = {
  email: { value: string };
  password: { value: string };
};
const LoginForm = () => {
  const [login, { loading, error, data }] = useLoginMutation();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    const data = new FormData(e.target as HTMLFormElement);

    try {
      const res = await login({
        variables: {
          email: data.get("email") as string,
          password: data.get("password") as string,
        },
      });
      const target = e.target as typeof e.target & FromFields;
      target.email.value = "";
      target.password.value = "";

      window.location.href = "http://localhost:3000";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <p>
        Log in to access to our video library, online courses and your profile
      </p>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      {error && <span>{error.message}</span>}
      <button type="submit" disabled={loading}>
        {loading ? <SpinnerStyles /> : "Log in"}
      </button>
    </Form>
  );
};

export default LoginForm;

const SpinnerStyles = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 0.8s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Form = styled.form`
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
    color: gray;
  }

  button {
    display: flex;
    justify-content: center;
    background: #56b9e5;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 1em;
    max-width: 100%;
    margin: 0.4em 0em;
    cursor: pointer;
  }
  p {
    margin: 0.3em 0em;
    font-size: 12px;
  }

  span {
    font-size: 14px;
    color: red;
    margin-bottom: 20px;
  }
`;
