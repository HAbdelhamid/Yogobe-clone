import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";
import {
  useChangeProfilDataMutation,
  useCurrentUserQuery,
  useDeleteAvatarMutation,
} from "../gql/generated";
import Image from "next/image";
import { withAuth } from "../gql/auth";

function Settings() {
  const [file, setFile] = useState<File | null>();
  const [deleteAvatar] = useDeleteAvatarMutation();
  const { data } = useCurrentUserQuery();
  const [formData, setFormData] = useState({
    // avatar: data?.currentUser?.assets?.avatar,
    displayName: data?.currentUser?.profile?.displayName,
    shortBio: data?.currentUser?.profile?.shortBio,
    instagramUrl: data?.currentUser?.profile?.instagramURL
      ? data?.currentUser?.profile?.instagramURL
      : "https://www.instagram.com/",
    facebookUrl: data?.currentUser?.profile?.facebookURL
      ? data?.currentUser?.profile?.facebookURL
      : "https://www.facebook.com/",
    linkedinUrl: data?.currentUser?.profile?.linkedinURL
      ? data?.currentUser?.profile?.linkedinURL
      : "https://www.linkedin.com/",
  });

  const [changeProfileData, { data: changedProfileData }] =
    useChangeProfilDataMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await changeProfileData({
        variables: {
          avatar: file,
          displayName: formData.displayName,
          shortBio: formData.shortBio,
          instagramUrl: formData.instagramUrl,
          facebookUrl: formData.facebookUrl,
          linkedinUrl: formData.linkedinUrl,
        },
      });
      setFormData({
        displayName: "",
        shortBio: "",
        instagramUrl: "",
        facebookUrl: "",
        linkedinUrl: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const handleClick = async () => {
    await deleteAvatar();
  };
  console.log(file);

  return (
    <div>
      <Navbar userDataUpdate={changedProfileData} />
      <Container>
        <SettingsList>
          <h2>Back to dashboard</h2>
        </SettingsList>
        <CurrentSettings>
          <form onSubmit={handleSubmit}>
            <AvatarSettings>
              <Avatar
                src={
                  file
                    ? URL.createObjectURL(file)
                    : (data?.currentUser?.assets?.avatar as string)
                }
                width={90}
                height={90}
                alt=""
                onError={(e) => {
                  (e.target as HTMLImageElement).srcset = "./avatar.svg";
                }}
              />

              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
              />
              <button onClick={handleClick}>Remove Photo</button>
            </AvatarSettings>

            <Field>
              <label>Display name*</label>
              <input
                type="text"
                name="displayName"
                defaultValue={data?.currentUser?.profile?.displayName as string}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <label>Short bio</label>
              <input
                type="text"
                name="shortBio"
                defaultValue={formData.shortBio as string}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <label>Instagram</label>
              <input
                type="text"
                name="instagramUrl"
                defaultValue={formData.instagramUrl as string}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <label>Facebook</label>
              <input
                type="text"
                name="facebookUrl"
                defaultValue={formData.facebookUrl as string}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <label>LinkedIn</label>
              <input
                type="text"
                name="linkedinUrl"
                defaultValue={formData.linkedinUrl as string}
                onChange={handleChange}
              />
            </Field>
            <SubmitBtn type="submit">Save</SubmitBtn>
          </form>
        </CurrentSettings>
      </Container>
    </div>
  );
}

export const getServerSideProps = withAuth({
  // add any options for the function here
});

export default Settings;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #f5f5f5;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 40px 60px;
`;

const CurrentSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 80%;
  padding: 40px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 20px;
  input {
    padding: 1em;
    margin: 0.4em 0em;
    border-radius: 3px;
    background: white;
    border: 1px solid rgb(221, 221, 221);
    max-width: 60%;
    outline: 0px;
    color: gray;
  }

  // padding: 20px;
  // width: 50%;
  // border-radius: 5px;
  // background-color: rgb(255, 255, 255);
  // outline: 0px;
`;

const AvatarSettings = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  input {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1em;
    margin-left: 1em;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #56b9e5;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 1em;

  margin: 0.4em 0em;
  cursor: pointer;
`;
