import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Cards() {
  return (
    <Container>
      <div>
        <Styledimg src={"/card.jpg"} width={300} height={250} alt="" />
      </div>
      <Box>
        <h2>Yogans fysiologi</h2>
        <p>Yoga with Elaine de Souza</p>
        <p>Föreläsning: Metodik och praktisk tillämpning av anatomi.</p>
        <div>
          <p>SAVE TO FAVORITES</p>
        </div>
      </Box>
    </Container>
  );
}

export default Cards;

const Styledimg = styled(Image)`
  width: 100%;
  height: 100%;
  border-top-right-radius: 6px 6px;
  border-top-left-radius: 6px 6px;
`;

const Container = styled.div`
  font-size: 0.8rem;
  display: block;
  border: 0.5px #eeeeee solid;
  border-radius: 6px;
  p {
    margin: 1em auto;
  }
`;

const Box = styled.div`
  padding: 2em;
`;
