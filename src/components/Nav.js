import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px dotted red;

 
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content:space-evenly:;

`;
const Items= styled.li`
height:25px;
width:100px;
background-color:orange;
margin:20px;
`;

const Nav = () => {
  return (
    <Container>
      <List>
        <Items>1</Items>
        <Items>2</Items>
        <Items>3</Items>
        <Items>1</Items>
        <Items>2</Items>
        <Items>3</Items>
      </List>
    </Container>
  );
};

export default Nav;
