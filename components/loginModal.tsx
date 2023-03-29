import React from "react";
import LoginForm from "./loginForm";
import Modal from "./modal";

type Props = {
  close: () => void;
  open: boolean;
};

const LoginModal = ({ open, close }: Props) => {
  return (
    <Modal open={open} close={close}>
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
