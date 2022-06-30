import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 1.5rem 0rem;
  background: rgba(70, 200, 100, 0.75);
  border: none;
  border-radius: 5px;
  padding: 0;
  color: white;
  width: 24rem;
  font-size: 14px;
`;

const NavButton = (props) => {
  const navigate = useNavigate();
  return <StyledButton type={props.type} name={props.name} onClick={_ => navigate(props.link)}>{props.children}</StyledButton>
};

export default NavButton;
