import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  border: 2px dotted red;
  max-width: 80%;
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;
const Items = styled.li`
  color: white;
  height: 25px;
  width: 100px;
  //background-color: orange;
  margin: 20px;
`;

const Nav = () => {
  return (
    <Container>
      <List>
        <Items>Home</Items>
        <Items>Gallery</Items>
        <Items>Find Us </Items>
        <Items>About</Items>
        <Items>Network</Items>
        <Items>Giveaways</Items>
      </List>
    </Container>
  );
};

export default Nav;
