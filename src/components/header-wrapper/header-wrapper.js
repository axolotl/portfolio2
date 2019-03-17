import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const HeaderWrapper = ({ data }) => (
  <>
    <GlobalStyle key="global style" />
    <Head key="head" />
    <Header key="header" title={data.site.siteMetadata.siteTitle} />
  </>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const HeaderWrapperWithQuery = props => (
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
    render={data => <HeaderWrapper data={data} {...props} />}
  />
);

HeaderWrapperWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderWrapperWithQuery;
