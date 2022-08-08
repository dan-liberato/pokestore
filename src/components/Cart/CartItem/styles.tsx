import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 9px;
  border-bottom: 1px solid rgba(0, 168, 255, 0.5);

  div:last-of-type {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CartItemContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CartItemName = styled.div`
  font-size: 0.75rem;
`;

export const CartItemQtd = styled.div``;

export const CartItemPrice = styled.div`
  font-size: 0.75rem;
`;
