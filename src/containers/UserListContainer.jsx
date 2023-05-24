import React from "react";
import ContainerStyle from "@src/styled/Container.style";

const UserListContainer = (props) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

export default UserListContainer;
