import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 50, 80, 0.8);
  background-size: cover;
  border-radius: 5px;
  padding: 2rem;
`;

const FormCard = (props) => {
  return (
    <StyledDiv>
      <form onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </StyledDiv>
  );
};

export default FormCard;
