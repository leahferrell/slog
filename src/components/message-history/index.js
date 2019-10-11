import React from 'react'
import PropTypes from 'prop-types'
import Message from "../message";

const MessageHistory = ({ messages }) => (
  <ul>
    {messages.map(todo => (
      <Message key={todo.id} {...todo} />
    ))}
  </ul>
);

MessageHistory.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessageHistory
