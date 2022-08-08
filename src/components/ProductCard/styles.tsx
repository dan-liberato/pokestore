import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  min-height: 100%;
  background-color: ${(props) => props?.color};
  position: relative;
  transition: top 0.5s;
  top: 0;

  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;

  // &:hover > div button:last-of-type {
  //   background-color: #00a8ff;
  //   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  // }
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transition: top 0.5s;
    top: -0.5rem;
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

  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
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
