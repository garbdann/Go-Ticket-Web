import { StyledImageInput, CustomContentBox } from './style';

export default function ImageInput({ ...props }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    props.onChange?.(file || null);
  };

  return (
    <CustomContentBox>
      <StyledImageInput
        type="file"
        accept="image/*"
        id={props.id}
        name={props.name}
        onChange={handleChange}
      />
    </CustomContentBox>
  );
}
