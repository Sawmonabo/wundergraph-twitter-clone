import React from 'react';
import './Like.css';
import PropTypes from 'prop-types';

Like.propTypes = {
  Icon: PropTypes.object,
  active: PropTypes.bool
};

function Like ({ Icon, active }) {
  return (
    <button className={`likeOption  ${active && 'likeOption--active'}`}>
      <Icon fontSize='small' />
    </button>
  );
}

export default Like;
