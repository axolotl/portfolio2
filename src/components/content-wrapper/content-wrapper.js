import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './content-wrapper.css';

const ContentWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ContentWrapper;
