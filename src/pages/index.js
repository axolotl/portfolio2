import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Box from 'components/box';
import { graphql } from 'gatsby';
import ContentWrapper from 'components/content-wrapper';
import Text from 'components/text';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Index = ({ data }) => {
  const { headshot } = data.homeJson;
  return (
    <ContentWrapper>
      <Box withLeftBorder>
        <Headshot
          fluid={headshot ? headshot.childImageSharp.fluid : {}}
          alt={'headshot'}
          // style={{ position: 'absolute' }}
        />
        <Text large>Hello,</Text>
        <div style={{ height: '1rem' }} />
        <Text>
          I am a full stack web developer proficient in JavaScript, React, Node,
          SQL, Python, and C.{' '}
        </Text>
        <Text>
          I am passionate about clean code, effective communication, and systems
          thinking looking to join a team working to tackle complex business
          challenges.{' '}
        </Text>
        <div style={{ height: '2rem' }} />
        <Text>
          To learn more about me and my background, click{' '}
          <Link to="/about">here</Link>.
        </Text>
        <Text>
          {"To see projects I've done, click "}
          <Link to="/projects">here</Link>.
        </Text>
      </Box>
    </ContentWrapper>
  );
};

const Headshot = styled(Img)`
  border: 3px solid #ff1e00;
  width: 200px;
  border-radius: 50%;
  float: right;
  margin: 0 0 1.8rem 1.8rem;
`;

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
      headshot {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
