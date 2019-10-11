import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Message = ({ onClick, message }) => (
  <li
    onClick={onClick}
    className={"from-sender"}
  >
    {message}
  </li>
);

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Message
