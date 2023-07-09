import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  border: 2px dotted red;
  height: 325px;
  width: 1500px;
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const Items = styled.li`
  display: flex;
  color: white;
  height: 100px;
  width: 100px;
  margin: 20px;
  align-items: flex-end;
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
