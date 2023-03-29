import styled from "styled-components";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { PlayCircle } from "@styled-icons/bootstrap/PlayCircle";
import { Share } from "@styled-icons/fluentui-system-filled/Share";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import FavoriteBtn from "./favoriteBtn";
// import { Videos } from "../gql/types";
import {
  GetvideosQuery,
  LastViewedSeassionsQuery,
  Video,
  VideosDataFieldFragment,
} from "../gql/generated";
import Modal from "./modal";

type Videos = VideosDataFieldFragment[];

type Props = {
  video: Videos[number];
  // favoritedVideos: Video;
};

const Card = ({ video }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const [inputValue, setInputValue] = useState(
    `localhost:3000/Videos/${video.identifier}`
  );
  const [buttonText, setButtonText] = useState("Copy");
  const route = useRouter();

  const { thumbnailUrl, identifier } = video;
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleModalClose = () => {
    setOpenSharePopup(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(inputValue);
    setButtonText("Copied!");
  };

  return (
    <>
      {openSharePopup && (
        <Modal open={openSharePopup} close={handleModalClose}>
          <ModalWrap>
            <h3>Share</h3>
            <p>Copy this URL to share:</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <CopyBtn onClick={handleCopyToClipboard}>{buttonText}</CopyBtn>
          </ModalWrap>
        </Modal>
      )}
      <CardBox>
        <ImageContainer>
          <Link href={`/Videos/${identifier}`}>
            {video?.taxonomies?.flavor && (
              <TaxonomyTag>{video.taxonomies.flavor.name}</TaxonomyTag>
            )}
            <PlayButton>
              <PlayCircleIcon size="70" />
            </PlayButton>
            <Duration>{video.meta?.minutes} min</Duration>

            <ThumbnailImage
              src={thumbnailUrl || ""}
              width={300}
              height={250}
              alt="hi"
            />
          </Link>
        </ImageContainer>
        <Box>
          <h2>{video?.content?.title}</h2>
          <p>
            <StyledLink
              onClick={() => {
                route.push({
                  pathname: "/",
                  query: { q: video.primaryStyle?.name },
                });
              }}
            >
              {video.primaryStyle && video.primaryStyle.name}
            </StyledLink>{" "}
            with{" "}
            <StyledLink>{video.taxonomies?.instructors?.[0]?.name}</StyledLink>
          </p>
          <Description>{video?.shortDescription}</Description>
          {/* {isLogged && <p style={{ color: "red" }}>{isLogged}</p>} */}
          <ActionsContainer ref={popupRef}>
            <FavoriteBtn video={video} />
            <MenuButton
              onClick={() => {
                setShowPopup(true);
              }}
            >
              <OptionBtn size="25" />
              {showPopup && (
                <OptionPopup>
                  <ul>
                    <li>
                      <ShareBtn
                        onClick={() => {
                          setOpenSharePopup(true);
                        }}
                      >
                        <Share size={16} /> Share
                      </ShareBtn>
                    </li>
                  </ul>
                </OptionPopup>
              )}
            </MenuButton>
          </ActionsContainer>
        </Box>
      </CardBox>
    </>
  );
};

export default Card;

const Duration = styled.span`
  position: absolute;
  right: 6px;
  bottom: 6px;
  background: black;
  color: white;
  padding: 5px;
  margin: 3px;
  border-radius: 5px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PlayCircleIcon = styled(PlayCircle)`
  color: white;
  font-weight: 1em;
`;

const OptionBtn = styled(ThreeDots)`
  color: black;
  font-weight: 1em;
`;

const ShareBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
`;

const StyledLink = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: #129edc;
  background: none;
  border: none;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  color: #7d7d7d;
`;

const TaxonomyTag = styled.span`
  position: absolute;
  // right: 80%;
  // bottom: 80%;
  background: #454857;
  color: white;
  font-size: 11px;
  padding: 5px;
  margin: 7px;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
`;

const OptionPopup = styled.div`
  position: absolute;
  top: 8px;
  left: 1px;
  z-index: 1;
  padding: 15px;
  // height: 100%;
  // width: 100%;

  background: white;
  border: solid 0.1px black;
  border-radius: 3px;

  li {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-right-radius: 6px 6px;
  border-top-left-radius: 6px 6px;
`;

const CardBox = styled.div`
  font-size: 0.8rem;
  display: block;
  border: 0.5px #eeeeee solid;
  border-radius: 6px;

  h2 {
    font-size: 16px;
  }

  p {
    margin: 1em auto;
  }
`;

const Box = styled.div`
  padding: 2em;
`;

const ModalWrap = styled.div`
  padding: 2em;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input {
    border-radius: 3px;
    border-right: none;
    background: white;
    color: black;
    padding: 10px;
    border: solid 1px grey;
  }
`;

const CopyBtn = styled.button`
  padding: 11px;
  margin-left: -4px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #56b9e5;
  cursor: pointer;
`;
