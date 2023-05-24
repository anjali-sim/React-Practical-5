import React from "react";
import PropTypes from "prop-types";
import ContainerStyle from "@src/styled/Container.style";

const UserListContainer = (props) => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

UserListContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserListContainer;
