import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './text.css';

const Text = ({ children, large = false }) => {
  return <StyledText large={large}>{children}</StyledText>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  large: PropTypes.string,
};

export default Text;
