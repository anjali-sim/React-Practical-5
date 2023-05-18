import React from "react";
import UserListStyle from "@src/styled/UserList.style";
import UserCard from "@UserList/UserCardTable";
import { USERLISTDATA } from "@src/constants/dummyData";
import { Navbar } from "@src/components/Navbar/index";

const UserList = () => {
  return (
    <UserListStyle>
      <Navbar />
      {USERLISTDATA.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          profile={user.profile}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
      ))}
    </UserListStyle>
  );
}

export default UserList;
