import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { timeout } from 'constants/transition';
//
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

class Transition2 extends PureComponent {
  render() {
    const { children, location } = this.props;

    // const RoutesContainer = posed.div({
    //   enter: {
    //     y: 0,
    //     transition: {
    //       ease: 'easeInOut',
    //     },
    //   },
    //   exit: {
    //     y: '-100%',
    //     transition: {
    //       ease: 'easeInOut',
    //     },
    //   },
    // });

    const RoutesContainer = posed.div({});

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <GlobalStyle key="global style" />
        <Head key="head" />
        {/* <Header key="header" title={data.site.siteMetadata.siteTitle} /> */}
        <Header key="header" title={'Samuel Machat'} />
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
        {/* <div key={location.pathname}>{children}</div> */}
      </PoseGroup>
    );

    // return <PoseGroup>{children}</PoseGroup>;

    // return <div key={location.pathname}>{children}</div>;
  }
}

// Transition.propTypes = {
//   children: PropTypes.node.isRequired,
//   location: PropTypes.object.isRequired,
// };

export default Transition2;
