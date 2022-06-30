import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 1.5rem 0rem;
  background: rgba(70, 200, 100, 0.75);
  border: none;
  border-radius: 5px;
  padding: 0;
  color: white;
  width: 100%;
  font-size: 14px;
`;

const FormButton = (props) => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>
};

export default FormButton;
