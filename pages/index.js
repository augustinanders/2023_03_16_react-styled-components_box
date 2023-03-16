import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "../components/StyledBox.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox isBlack />
    </div>
  );
}
