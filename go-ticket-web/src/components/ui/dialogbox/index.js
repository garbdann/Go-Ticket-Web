import { StyledDialogBox, StyledDialogText } from './style';
import SubmitButton from '../submitbutton';

export default function DialogBox({ ...props }) {
  return (
    <StyledDialogBox>
      <StyledDialogText>
        <p>{props.message}</p>
        <SubmitButton onClick={props.onClose}>Fechar</SubmitButton>
      </StyledDialogText>
    </StyledDialogBox>
  );
}
