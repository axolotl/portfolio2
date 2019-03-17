import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;

export const IconBox = styled.div`
  width: 2rem;
  height: auto;
`;

export const LinkBox = styled.div`
  height: 100%;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  color: red;
  &:hover {
    color: #565656;
  }
`;
