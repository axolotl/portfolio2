// import React from 'react';
// import Box from 'components/box';
// import Gallery from 'components/gallery';
// import { graphql } from 'gatsby';

// const Projects = ({ data }) => (
//   <>
//     <Gallery items={data.projectsJson.gallery} />
//   </>
// );

// export default Projects;

// export const query = graphql`
//   query ProjectsQuery {
//     projectsJson {
//       gallery {
//         title
//         copy
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Box from 'components/box';
import Head from 'components/head';
import ContentWrapper from 'components/content-wrapper';
import Text from 'components/text';

const About = ({ data }) => (
  <ContentWrapper>
    <Head pageTitle={data.aboutJson.title} />
    <Box withLeftBorder>
      <Big>Projects</Big>
      <Title large>Cadence</Title>
      <Link href="https://getcadence.co/">Visit</Link>
      <Link href="https://github.com/Lambda-School-Labs/labs9-employee-scheduler">
        GitHub
      </Link>
      <Text>
        Cadence was my capstone project for Lambda School. I worked on a team of
        five for five weeks to build the app. My contribution centered around
        building out the data model, REST endpoints, API access control, as well
        as data parsing for the calendar component, client-side authentication,
        and email invite functionality.
      </Text>

      <Title large>WhimSee BOOKS</Title>
      <Link href="https://whimseebooks.com/">Visit</Link>
      <Link href="https://github.com/axolotl/whimsee">GitHub</Link>
      <Text>
        This is a marketing website I built for a children’s book. I coordinated
        with the authors and publisher to design, build, and ship the site. It
        is built with Gatsby for super fast performance.
      </Text>

      <Title large>Remote FS</Title>
      <Link href="https://remote-fs.netlify.com/">Visit</Link>
      <Link href="https://github.com/axolotl/remote-file-storage">GitHub</Link>
      <Text>
        Remote FS is an app that facilitates uploading and downloading of small
        files and organization thereof into folders. The frontend is build with
        a recursive directory structure and with file uploads and downloads to
        and from S3.
      </Text>

      <Title large>Mastermind</Title>
      <Link href="https://axolotl-mastermind.herokuapp.com/">Visit</Link>
      <Link href="https://github.com/axolotl/mastermind-app">GitHub</Link>
      <Text>
        This app is a full stack build for the code-breaking game Mastermind.
        The gameplay is built with a drag and drop input field. State for the
        entire application is managed by Redux. Styles are applied inline via
        self-contained presentational components. An Express server running
        Sequelize and Postgres stores user scores to create a high scores tab.
      </Text>

      <Title large>Lambda Notes</Title>
      <Link href="https://frontend-project-week.netlify.com">Visit</Link>
      <Link href="https://github.com/axolotl/front-end-project-week">
        GitHub
      </Link>
      <Text>
        I build this for front end project week at Lambda School. It’s a basic
        note taking app, but one that also includes a zombie note. For the
        project we had a shared server and someone in the group kept deleting
        people’s notes, so I wrote my client to always recreate this “zombie”
        note if it saw that it was missing.
      </Text>

      <Title large>Story of Keswick</Title>
      <Link href="http://storyofkeswick.com/">Visit</Link>
      <Link href="https://github.com/axolotl/keswick-book-site">GitHub</Link>
      <Text>
        I rebuilt this marketing website from WayBack Machine archives. The
        original developer had let the host expire and lost the build
        information. Site includes two and half dozen blog posts dynamically
        generated from markdown, paginated, and searchable by time period.
      </Text>
    </Box>
  </ContentWrapper>
);

const Title = styled.h2`
  font-size: 2.5rem;
  color: #222222;
  line-height: 1.5;
  -webkit-letter-spacing: 0.25px;
  -moz-letter-spacing: 0.25px;
  -ms-letter-spacing: 0.25px;
  letter-spacing: 0.25px;
`;

const Big = styled.h2`
  font-size: 3.5rem;
  color: #222222;
  line-height: 1.5;
  -webkit-letter-spacing: 0.25px;
  -moz-letter-spacing: 0.25px;
  -ms-letter-spacing: 0.25px;
  letter-spacing: 0.25px;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  font-size: 1.4rem;
  margin: 0.5rem 1rem 1rem 0;
  display: inline-block;
`;

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query ProjectsQuery {
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
