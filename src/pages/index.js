import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box';
import { graphql } from 'gatsby';
import ContentWrapper from 'components/content-wrapper';
import Text from 'components/text';
import styled from 'styled-components';

const proficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SQL',
  'Gatsby',
  'Node.js',
  'Express',
  'Knex',
  'Jest',
  'Python',
  'C',
];

const Index = ({ data }) => (
  <ContentWrapper>
    <Box withLeftBorder>
      <Text large>Hello,</Text>
      {/* <Text>
        I am a full stack web developer proficient in
        <ul>
          {proficiencies.map((item, i) => (
            <LI key={i}>{item}</LI>
          ))}
        </ul>{' '}
      </Text> */}
      <Text>
        I am a full stack web developer proficient in JavaScript, React, Node,
        SQL, Python, and C.{' '}
      </Text>
      <Text>
        I am passionate about clean code, effective communication, and systems
        thinking looking to join a team working to tackle complex business
        challenges.{' '}
      </Text>
    </Box>
  </ContentWrapper>
);

const LI = styled.li`
  display: block;
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
    }
  }
`;
