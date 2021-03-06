import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container, HR } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';

const Header = ({ title }) => (
  <Container>
    <Link to="/">
      <Title as="h1" size="large">
        {title}
      </Title>
      <HR />
      <Title as="h2">software developer</Title>
    </Link>

    <Nav />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
