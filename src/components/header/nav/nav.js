import React from 'react';
import { Link } from 'gatsby';
import { Container, StyledLink, LinkBox, IconBox } from './nav.css';
import TwitterIcon from '../../../images/icons/twitter.svg';
import LinkedInIcon from '../../../images/icons/linkedin.svg';
import GitHubIcon from '../../../images/icons/github.svg';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <LinkBox>
          <StyledLink to="/about">About</StyledLink>
        </LinkBox>
      </li>
      <li>
        <LinkBox>
          <StyledLink to="/projects">Projects</StyledLink>
        </LinkBox>
      </li>
      <li>
        <IconBox>
          <a href="https://github.com/axolotl">
            <GitHubIcon />
          </a>
        </IconBox>
      </li>
      <li>
        <IconBox>
          <a href="https://twitter.com/samuelmachat">
            <TwitterIcon />
          </a>
        </IconBox>
      </li>
      <li>
        <IconBox>
          <a href="https://www.linkedin.com/in/samuel-machat/">
            <LinkedInIcon />
          </a>
        </IconBox>
      </li>
    </ul>
  </Container>
);

export default Nav;
