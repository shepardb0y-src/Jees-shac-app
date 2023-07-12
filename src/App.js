import Nav from "./components/Nav.js";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles.js";
import Container from "./components/Container.js";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
`;

function App() {
  return (
    <Contents>
      <GlobalStyles />
      <Nav />
      <Container />
    </Contents>
  );
}

export default App;
