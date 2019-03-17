import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  width: 700px;
  max-width: 700px;
  margin: 0 4rem 4rem 4rem;

  ${({ withLeftBorder }) =>
    withLeftBorder &&
    css`
      border-left: 3px solid #ff1e00;
    `};
`;
