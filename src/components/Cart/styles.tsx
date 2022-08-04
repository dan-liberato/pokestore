import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 168, 255, 0.5);
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: max-content;
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 168, 255, 0.5);
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

export const CartContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const CartTotal = styled.div`
  width: 94%;
  display: inline-flex;
  justify-content: space-between;
  padding: 10px 11px;
`;

export const CartButtonProceedToCheckout = styled.button`
  width: 100%;
  height: 50px;
  background-color: #00a8ff;
  opacity: 0.8;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: relative;
  bottom: -2px;
  transition: background-color 0.2s;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  &:hover {
    background-color: #00a8ff;
  }
`;
