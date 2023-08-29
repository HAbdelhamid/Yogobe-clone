import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import React, { useState } from "react";
import styled from "styled-components";
import { DevicePlatformKind, useSignupMutation } from "../gql/generated";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: null,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Please make sure that your password has at least 8 characters")
    .max(50, "Too Long!"),
  // country: Yup.object().shape({
  //   country: Yup.string().required("Country is required"),
  // }),
});

const SignupForm = () => {
  const [signup, { data, loading }] = useSignupMutation();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: any) => {
    try {
      const result = await signup({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          country: values.country.value,
          platform: DevicePlatformKind.Web,
        },
      });

      if (result?.data?.signUpV2?.user?.id) {
        window.location.href = "http://localhost:3000";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Become a member!</Title>
        <Description>Learn more about your membership and pricing</Description>
        <Wrap>
          <FirstnameField>
            <label htmlFor="firstName">First Name*</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {submitted &&
            formik.touched.firstName &&
            formik.errors.firstName ? (
              <InputError>{formik.errors.firstName}</InputError>
            ) : null}
          </FirstnameField>
          <LastnameField>
            <label htmlFor="lastName">Last Name*</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {submitted && formik.errors.lastName ? (
              <InputError>{formik.errors.lastName}</InputError>
            ) : null}
          </LastnameField>
        </Wrap>
        <Wrap>
          <EmailField>
            <label htmlFor="email">Email Address*</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {submitted && formik.touched.email && formik.errors.email ? (
              <InputError>{formik.errors.email}</InputError>
            ) : null}
          </EmailField>
          <PasswordField>
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {submitted && formik.touched.password && formik.errors.password ? (
              <InputError>{formik.errors.password}</InputError>
            ) : null}
          </PasswordField>
        </Wrap>

        <label htmlFor="country">Country*</label>
        <Select
          id="country"
          instanceId="country"
          name="country"
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "mx", label: "Mexico" },
            { value: "se", label: "Sweden" },
          ]}
          value={formik.values.country}
          onChange={(selectedOption) =>
            formik.setFieldValue("country", selectedOption)
          }
        />
        {submitted && formik.touched.country && formik.errors.country ? (
          <InputError>{formik.errors.country}</InputError>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          onClick={() => {
            setSubmitted(true);
          }}
        >
          {loading ? <SpinnerStyles /> : "Log in"}
        </button>
        {data?.signUpV2?.errors?.[0].message && (
          <ServerError>{data.signUpV2.errors[0].message}</ServerError>
        )}
      </Form>
    </>
  );
};

export default SignupForm;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ServerError = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 500px;
`;

const InputError = styled.div`
  color: rgb(229, 59, 77);
  font-size: 13px;
  font-weight: 400;
`;

const EmailField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PasswordField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const FirstnameField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LastnameField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// const CountrySelectOption = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;
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
  width: 80%;

  @media (max-width: 700px) {
    width: 100%;
  }

  label {
    margin-top: 20px;
    margin-bottom: 7px;
    font-size: 13px;
    font-weight: 600;
  }

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
    width: 100%;
    max-width: 100%;
    margin: 20px 0px;
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
