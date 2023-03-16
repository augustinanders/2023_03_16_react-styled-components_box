import styled from "styled-components";

/* export default function BoxWithStyledComponent({ isBlack }) {
  return <StyledBox isBlack={isBlack}></StyledBox>;
} */
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  background-color: ${({ isBlack }) => {
    if (isBlack) {
      return "black";
    }
  }};

  &:hover {
    background-color: red;
  }
`;

export default StyledBox;