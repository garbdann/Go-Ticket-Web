import { StyledSelect } from './style';

export default function SelectInput({ options = [], ...props }) {
  return (
    <StyledSelect {...props}>
      <option value="">Selecione uma opção</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
}
