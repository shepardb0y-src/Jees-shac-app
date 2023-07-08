import Nav from "./components/Nav.js";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

export default App;
