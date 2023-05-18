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
`;

export const ButtonLeftStyle = styled(Button)`
  transform: rotate(-45deg);
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
    left: 17px;
  }
`;
