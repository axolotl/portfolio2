import React from 'react';
import { Link } from 'gatsby';
import { Container, StyledLink, LinkBox, IconBox } from './nav.css';
import TwitterIcon from '../../../images/icons/twitter.svg';
import LinkedInIcon from '../../../images/icons/linkedin.svg';
import GitHubIcon from '../../../images/icons/github.svg';

const Nav = () => (
  <Container>
    <ul>
      {/* <li>
        <LinkBox>
          <StyledLink to="/about">About</StyledLink>
        </LinkBox>
      </li> */}
      <li>
        <LinkBox>
          <StyledLink to="/projects">Projects</StyledLink>
        </LinkBox>
      </li>
      <li>
        <IconBox>
          <a
            href="https://github.com/axolotl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </IconBox>
      </li>
      <li>
        <IconBox>
          <a
            href="https://twitter.com/samuelmachat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </IconBox>
      </li>
      <li>
        <IconBox>
          <a
            href="https://www.linkedin.com/in/samuel-machat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </IconBox>
      </li>
    </ul>
  </Container>
);

export default Nav;
