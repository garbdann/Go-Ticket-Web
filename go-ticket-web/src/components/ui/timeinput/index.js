import { StyledTimePicker } from "./style";

export default function TimeInput({ id, name, value, onChange }) {
  return (
    <StyledTimePicker
      type="time"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
