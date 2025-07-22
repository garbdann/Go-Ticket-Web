import { StyledDatePicker } from "./style";

export default function DateInput({ id, name, value, onChange }) {
  return (
    <StyledDatePicker
      type="date"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
