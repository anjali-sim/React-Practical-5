import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../action/userAction";
import UserListStyle from "@styled/UserList";
import UserCard from "@UserList/UserCard";
import Navbar from "@Navbar/Navbar";
import { ButtonWrapper } from "../../styled/Button";
import Button from "../NavigationButton/Button";

function UserList({ loading, users, error, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <UserListStyle>
      <Navbar />
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          profile={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
        />
      ))}
        <Button />
    </UserListStyle>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  users: state.users,
  error: state.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

