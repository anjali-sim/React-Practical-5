import styled from "styled-components";

export const ButtonRightStyle = styled.div`
  display: block;
  margin: 30px auto;
  width: 20px;
  height: 20px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  cursor: pointer;
  transform: rotate(135deg);
`;

export const ButtonLeftStyle = styled.div`
  display: block;
  margin: 30px auto;
  width: 20px;
  height: 20px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  cursor: pointer;
  transform: rotate(-45deg);
`;

export const ButtonWrapper = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
`;
