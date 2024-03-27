import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';

/**
 * Badge component
 */
export const Badge = ({ text }) => (
  <span className="badge">{text}</span>
);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};