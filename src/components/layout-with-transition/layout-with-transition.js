import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import HeaderWrapper from '../header-wrapper/header-wrapper';

class LayoutWithTransition extends PureComponent {
  render() {
    const { children, location } = this.props;

    const ContentContainer = posed.div({
      enter: { opacity: 1, delay: 100, delayChildren: 100 },
      exit: { opacity: 0 },
    });

    return (
      <PoseGroup>
        <HeaderWrapper key="layout" />
        <ContentContainer key={location.pathname}>{children}</ContentContainer>
      </PoseGroup>
    );
  }
}

LayoutWithTransition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default LayoutWithTransition;
