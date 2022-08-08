import styled from 'styled-components';

export const HeaderContainer = styled.header``;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 1rem;
`;

export const ContainerImage = styled.div`
  width: 200px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ToggleCart = styled.button`
  color: #fff;
  background-color: #32b9ff;

  &:hover {
    background-color: #00a8ff;
  }

  img {
    margin-left: 0.5rem;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 15px 0;
  gap: 10px;

  button {
    color: #fff;
    background-color: #32b9ff;

    &:hover {
      background-color: #00a8ff;
    }
  }
`;
