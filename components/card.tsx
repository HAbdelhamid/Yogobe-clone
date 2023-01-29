import React from "react";
import styled from "styled-components";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { PlayCircle } from "@styled-icons/bootstrap/PlayCircle";
import Image from "next/image";
import { Video } from "../gql/types";
import { useRouter } from "next/router";

type Props = {
  video: Video;
};

const Card = ({ video }: Props) => {
  const route = useRouter();

  return (
    <CardBox>
      <ImageContainer>
        {video.taxonomies.flavor && (
          <TaxonomyTag>{video.taxonomies.flavor.name}</TaxonomyTag>
        )}
        <PlayButton>
          <PlayCircleIcon size="70" />
        </PlayButton>
        <Duration>{video.meta.minutes} min</Duration>

        <ThumbnailImage
          src={video.thumbnailUrl}
          width={300}
          height={250}
          alt="hi"
        />
      </ImageContainer>
      <Box>
        <h2>{video.content.title}</h2>
        <p>
          <StyledLink
            onClick={() => {
              route.push({
                pathname: "/",
                query: { category: video.taxonomies.genre.slug },
              });
            }}
          >
            {video.taxonomies.genre && video.taxonomies.genre.name}
          </StyledLink>{" "}
          with <StyledLink>{video.taxonomies.instructors[0]?.name}</StyledLink>
        </p>
        <Description>{video.content.shortDescription}</Description>
        <ActionsContainer>
          <FavoriteButton>
            <FavoriteBorder size="18" /> <Strong>SAVE TO FAVORITES</Strong>
          </FavoriteButton>
          <MenuButton>
            <ThreeDots size="25" />
          </MenuButton>
        </ActionsContainer>
      </Box>
    </CardBox>
  );
};

export default Card;

const Strong = styled.strong`
  margin-left: 6px;
`;

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

const FavoriteButton = styled.button`
  font-size: 11px;
  color: #242424;
  flex: 0 auto;
  border: none;
  background: none;
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

const MenuButton = styled.div``;

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
