import React from 'react';
import './Share.css';
import PropTypes from 'prop-types';

Share.propTypes = {
  Icon: PropTypes.object,
  active: PropTypes.bool
};

function Share ({ Icon, active }) {
  return (
    <button className={`shareOption  ${active && 'shareOption--active'}`}>
      <Icon fontSize='small'/>
    </button>
  );
}

export default Share;
