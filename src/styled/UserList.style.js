import styled from "styled-components";

// Style for displaying the user list
const UserListStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;

  @media (max-width: 650px) {
    padding: 0.6rem;
  }
  @media (max-width: 500px) {
    padding: 0.2rem;
  }
`;

export default UserListStyle;
