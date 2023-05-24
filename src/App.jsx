import AppStyle from "@src/styled/App.style";
import UserListContainer from "@src/containers/UserListContainer";
import UserListWrap from "@src/components/UserList/UserListWrap";

function App() {
  return (
    <>
      <AppStyle>
        <UserListContainer>
          <UserListWrap />
        </UserListContainer>
      </AppStyle>
    </>
  );
}

export default App;
