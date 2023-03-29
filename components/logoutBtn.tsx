import styled from "styled-components";

import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { useLogoutMutation } from "../gql/generated";

const LogoutButton = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();

    window.location.href = "/";
  };

  return (
    <LogoutBtn onClick={handleLogout}>
      Logout
      <LogOut size={30} />
    </LogoutBtn>
  );
};

export default LogoutButton;

const LogoutBtn = styled.button`
  font-size: 13px;
  padding: 8px 10px;
  margin-left: 6px;
  color: black;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  display: flex;

  align-items: center;
`;
