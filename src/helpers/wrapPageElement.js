import React from 'react';
import LayoutWithTransition from 'components/layout-with-transition';
import PropTypes from 'prop-types';

const wrapPageElement = ({ element, props }) => {
  return <LayoutWithTransition {...props}>{element}</LayoutWithTransition>;
};

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
};

export default wrapPageElement;
