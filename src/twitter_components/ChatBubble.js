import React from 'react';
import './ChatBubble.css';
import PropTypes from 'prop-types';

ChatBubble.propTypes = {
  Icon: PropTypes.object,
  active: PropTypes.bool
};

function ChatBubble ({ Icon, active }) {
  return (
    <button className={`chatBubbleOption  ${active && 'chatBubbleOption--active'}`}>
      <Icon fontSize='small'/>
    </button>
  );
}

export default ChatBubble;
