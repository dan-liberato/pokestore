import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props?.color};
  opacity: 0.8;

  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover > div button:last-of-type {
    background-color: #00a8ff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }
`;

export const ProductCardImage = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCardInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`;

export const ProductCardName = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProductCardDescription = styled.p``;

export const ProductCardPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ButtonAddToCart = styled.button`
  width: 100%;
  height: 50px;
  background-color: #66caff;
  opacity: 0.8;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  &:hover {
    background-color: #00a8ff;
  }
`;
