import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box';
import { graphql } from 'gatsby';
import ContentWrapper from 'components/content-wrapper';

const Index = ({ data }) => (
  <ContentWrapper>
    <Box withLeftBorder>Hello</Box>
  </ContentWrapper>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
