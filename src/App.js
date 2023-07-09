import Nav from "./components/Nav.js";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles.js";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;

`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Nav />
    </Container>
  );
}

export default App;
