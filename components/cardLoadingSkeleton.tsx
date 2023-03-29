import React from "react";
import styled from "styled-components";

function CardLoadingSkeleton() {
  return (
    <Container>
      <Card>
        <ImageContainer></ImageContainer>
        <p></p>
        <p></p>
      </Card>
      <Card>
        <ImageContainer></ImageContainer>
        <p></p>
        <p></p>
      </Card>
      <Card>
        <ImageContainer></ImageContainer>
        <p></p>
        <p></p>
      </Card>
      <Card>
        <ImageContainer></ImageContainer>
        <p></p>
        <p></p>
      </Card>
      <Card>
        <ImageContainer></ImageContainer>
        <p></p>
        <p></p>
      </Card>
    </Container>
  );
}

export default CardLoadingSkeleton;

const Container = styled.div`
  display: grid;
  margin: 0px auto;
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageContainer = styled.div``;
const Card = styled.div` 
    
    display: flex;
    flex-direction:column;
    
    background:white;
    border: 0.5px #eeeeee solid;
    border-radius: 6px;
    width:400px;
    height:300px;
p {
    margin-top: 15px;
    margin-left: 20px;
    width: 80%;
    height: 3%;

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
  width: 400px;
  height: 225px;
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
}`;
