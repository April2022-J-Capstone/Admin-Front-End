import styled from 'styled-components';
import { useSendConfirmation } from '../hooks';
import { getStoredLogin } from '../utils';

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

const SendConfirmationButton = (props) => {
  const sendConfirmation = useSendConfirmation();

  const onClick = async _ => {
    try {
      const { username } = await getStoredLogin();
      await sendConfirmation(username);
      props.onSend();
    }
    catch (error) {
      console.error(`SendConfirmationButton failed: ${error}`);
    }
  };

  return <StyledButton type={props.type} onClick={onClick}>Resend Confirmation</StyledButton>
};

export default SendConfirmationButton;
