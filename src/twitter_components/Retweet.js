import React from 'react';
import './Retweet.css';
import PropTypes from 'prop-types';

Retweet.propTypes = {
  Icon: PropTypes.object,
  active: PropTypes.bool
};

function Retweet ({ Icon, active }) {
  return (
    <button className={`retweetOption  ${active && 'retweetOption--active'}`}>
      <Icon fontSize='small'/>
    </button>
  );
}

export default Retweet;
