import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "@src/action/userAction";
import UserListStyle from "@src/styled/UserList.style";
import UserCard from "@UserList/UserCardTable";
import { Navbar } from "@src/components/Navbar/index";
import Button from "@src/components/NavigationButton/Button";
import { ButtonWrapper } from "@src/styled/Button.style";

const UserList = ({ loading, users, error, fetchUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  useEffect(() => {
    fetchUsers(currentPage);
  }, [fetchUsers, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
      <ButtonWrapper>
        <Button
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </ButtonWrapper>
    </UserListStyle>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  users: state.users,
  error: state.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
