import React from "react";
import PropTypes from "prop-types";
import { ButtonLeftStyle } from "@src/styled/Button.style";
import { ButtonRightStyle } from "@src/styled/Button.style";
import { ButtonWrapper } from "@src/styled/Button.style";

const Button = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <>
      <ButtonWrapper>
        <ButtonLeftStyle
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        <span>{currentPage}</span> / <span>{totalPages}</span>
        <ButtonRightStyle
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </ButtonWrapper>
    </>
  );
};

Button.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Button;
