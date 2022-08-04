import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #fafafa;
  padding: 20px;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 390px;
  }
`;
