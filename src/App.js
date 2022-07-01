import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [number, setNumber] = useState([]);

  const pushOne = () => {
    setNumber(number.concat(1));
  };

  const pushTwo = () => {
    setNumber(number.concat(2));
  };

  const pushThree = () => {
    setNumber(number.concat(3));
  };

  const pushOk = () => {
    alert(number);
  };

  const pushDel = () => {
    setNumber(number.slice(0, -1));
  };

  console.log(number);

  return (
    <PageWrapper>
      <SetNumber>{number}</SetNumber>
      <NumberpadWrapper>
        <NumberKey onClick={pushOne}>1</NumberKey>
        <NumberKey onClick={pushTwo}>2</NumberKey>
        <NumberKey onClick={pushThree}>3</NumberKey>
        <NumberKey>4</NumberKey>
        <NumberKey>5</NumberKey>
        <NumberKey>6</NumberKey>
        <NumberKey>7</NumberKey>
        <NumberKey>8</NumberKey>
        <NumberKey>9</NumberKey>
        <NumberKey onClick={pushOk}>👌</NumberKey>
        <NumberKey>0</NumberKey>
        <NumberKey onClick={pushDel}>👈</NumberKey>
      </NumberpadWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SetNumber = styled.div`
  height: 30px;
`;

const NumberpadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 312px;
  margin: 0 auto;
  border: 2px solid #000;
`;

const NumberKey = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
  transition: 0.3s;
`;

export default App;
