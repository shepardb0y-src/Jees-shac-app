import React from "react";
import styled from "styled-components";

const Contents = styled.div`
  display: flex;

  vh: 100%;
  width: 1500px;
  background-color: grey;
  border: 2px dotted green;
`;
const ImageContainer = styled.div`
  margin: 20px 20px 0 0;
  height: 500px;
  width: 1000px;
  background-color: green;
  border: 20px solid black;
`;
const AboutContainer = styled.div`
  margin: 20px 0 0 0;
  height: 500px;
  width: 700px;
  background-color: red;
  border: 20px solid black;
`;

const Container = () => {
  return (
    <Contents>
      <ImageContainer />
      <AboutContainer />
    </Contents>
  );
};

export default Container;
