import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const AnimatedContainer = posed.div({
  enter: { opacity: 1, delay: 100, delayChildren: 100 },
  exit: { opacity: 0 },
});

const NonAnimatedPose = posed.div({});

// const AnimatedContainer = posed.div({
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

// const Layout = ({ data, children }) => (
//   <div>
//     <GlobalStyle />
//     <Head />
//     <Header title={data.site.siteMetadata.siteTitle} />
//     <PoseGroup>
//       <AnimatedContainer key="key">{children}</AnimatedContainer>
//     </PoseGroup>
//   </div>
// );

const Layout = ({ data, children }) => (
  <>
    {/* <NonAnimatedPose>
      <GlobalStyle key="global style" />
      <Head key="head" />
      {/* <Header key="header" title={data.site.siteMetadata.siteTitle} /> */}
    {/* <Header key="header" title={'Samuel Machat'} /> */}
    {/* </NonAnimatedPose> */}
    <PoseGroup>
      <AnimatedContainer key="key">{children}</AnimatedContainer>
    </PoseGroup>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default LayoutWithQuery;
export default Layout;
