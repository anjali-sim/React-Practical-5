import styled from "styled-components";

export const Button = styled.div`
  display: block;
  margin: 30px auto;
  width: 20px;
  height: 20px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  cursor: pointer;
`;

export const ButtonRightStyle = styled(Button)`
  transform: rotate(135deg);

  @media (max-width: 550px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 400px) {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 350px) {
    width: 11px;
    height: 11px;
  }
`;

export const ButtonLeftStyle = styled(Button)`
  transform: rotate(-45deg);

  @media (max-width: 550px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 400px) {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 350px) {
    width: 11px;
    height: 11px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  left: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  // Media Query
  @media (max-width: 1024px) {
    left: 200px;
  }
  @media (max-width: 900px) {
    left: 170px;
  }
  @media (max-width: 768px) {
    left: 140px;
  }
  @media (max-width: 650px) {
    left: 120px;
  }
  @media (max-width: 600px) {
    left: 100px;
  }
  @media (max-width: 500px) {
    left: 85px;
  }
  @media (max-width: 450px) {
    left: 73px;
  }
  @media (max-width: 400px) {
    left: 60px;
  }
  @media (max-width: 350px) {
    left: 53px;
  }
`;
