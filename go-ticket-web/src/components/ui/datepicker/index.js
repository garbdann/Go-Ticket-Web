import { StyledDatePicker } from "./style";

export default function DatePickerInput({ id, name, value, onChange }) {
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
