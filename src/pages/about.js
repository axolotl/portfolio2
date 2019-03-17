import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Box from 'components/box';
import Head from 'components/head';
import ContentWrapper from 'components/content-wrapper';

const About = ({ data }) => (
  <ContentWrapper>
    <Head pageTitle={data.aboutJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </ContentWrapper>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
