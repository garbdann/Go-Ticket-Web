import { StyledImageBox } from './style';

export default function ImageBox(props) {
  return (
    <StyledImageBox
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      {...props}
    />
  );
}
