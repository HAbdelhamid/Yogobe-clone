import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";
type Props = {
  open: boolean;
  close: () => void;
};
const Modal = ({ children, open, close }: React.PropsWithChildren<Props>) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
    // document.body.style.overflow = 'hidden';
  }, [open]);

  const handleClose = () => {
    setShow(false);
    close();
  };

  if (!show) return null;
  return (
    <Container>
      <ModalBackground>
        <CancelButton onClick={handleClose}>
          <CancelCircleIcon size={20} />
        </CancelButton>
        {children}
      </ModalBackground>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const CancelCircleIcon = styled(CancelCircle)`
  color: black;
`;

const CancelButton = styled.button`
  display: flex;
  justify-content: end;
  cursor: pointer;
  background: none;
  border: none;
`;

const ModalBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  
`;
