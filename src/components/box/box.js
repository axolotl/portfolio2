import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './box.css';

const Box = ({ children, withLeftBorder = false }) => (
  <Container withLeftBorder={withLeftBorder}>{children}</Container>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  withLeftBorder: PropTypes.bool,
};

export default Box;
