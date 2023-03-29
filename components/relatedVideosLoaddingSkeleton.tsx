import React from "react";
import styled from "styled-components";

function RelatedVideosLoaddingSkeleton() {
  return (
    <div>
      <RelatedVideosLoadingSkeleton>
        <ImageContainer>
          <div></div>
        </ImageContainer>

        <p></p>
      </RelatedVideosLoadingSkeleton>
    </div>
  );
}

export default RelatedVideosLoaddingSkeleton;

const RelatedVideosLoadingSkeleton = styled.div`
margin-bottom:20px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-basis: 60%;
  p {
    margin-right: 20px;
    width: 100%;
    height: 20px;
justify-content:end;
    border-radius: 3px;
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
  
  div{
    width: 110px;
    height: 60px;
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
  }
`;

const ImageContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;
