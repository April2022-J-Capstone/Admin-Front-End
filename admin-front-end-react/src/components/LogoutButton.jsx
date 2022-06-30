import styled from 'styled-components';
import { useLogout } from '../hooks';

const StyledButton = styled.button`
  margin: 1.5rem 0rem;
  background: rgba(70, 200, 100, 0.75);
  border: none;
  border-radius: 5px;
  padding: 0;
  color: white;
  width: 8rem;
  font-size: 14px;
`;

const LogoutButton = (props) => {
  const logout = useLogout();

  const onClick = _ => logout()
    .then(_ => props.onLogout())
    .catch(e => console.error(`Logout Button failed: ${e}`));

  return <StyledButton type={props.type} onClick={onClick}>Logout</StyledButton>
};

export default LogoutButton;
