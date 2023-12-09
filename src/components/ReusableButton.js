import React from 'react';
import PropTypes from 'prop-types';

function ReusableButton({ onClick, buttonText}) {
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}

ReusableButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ReusableButton;