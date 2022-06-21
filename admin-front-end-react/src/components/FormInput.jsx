import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 1rem 0;
  width: 85%;
`;

const StyledInput = styled.input`
  border: 0;
  background: transparent;
  padding: 0.5rem;
  margin: 1rem 0;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
`;

const FormInput = (props) => {
  return (
    <StyledDiv>
      <StyledInput type={props.type} name={props.name} placeholder={props.placeholder} required autocomplete='false' />
    </StyledDiv>
  );
}

export default FormInput;
