import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
