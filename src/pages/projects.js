import React from 'react';
import Box from 'components/box';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Projects = ({ data }) => (
  <>
    <Gallery items={data.projectsJson.gallery} />
  </>
);

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
