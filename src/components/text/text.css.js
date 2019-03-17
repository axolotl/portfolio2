import styled from 'styled-components';

export const StyledText = styled.p`
  font-size: ${({ large }) => (large ? '3rem' : '1.6rem')};
  color: ${({ large }) => (large ? '#222222' : '#555555')};
  line-height: 1.5;
  letter-spacing: 0.25px;
`;
