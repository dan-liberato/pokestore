import styled from 'styled-components';

export const CartContainer = styled.div<{ open: boolean }>`
  display: ${(props) => (props?.open ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  border-radius: none;
  max-width: 300px;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 168, 255, 0.5);
  background-color: #fff;

  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #66caff;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #00a8ff;
  }

  @media (min-width: 768px) {
    height: max-content;
    min-height: 100px;
    display: flex;
    position: initial;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

    overflow: hidden;
    width: 100%;
    height: max-content;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 168, 255, 0.5);
  h2 {
    font-size: 1rem;
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
  height: 100px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CartTotal = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  padding: 10px 11px;
  font-size: 0.75rem;
  margin-top: 5px;
`;

export const CartButtonProceedToCheckout = styled.button`
  width: 100%;
  height: 50px;
  background-color: #00a8ff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: absolute;
  margin: 0;
  bottom: 0;
  transition: background-color 0.2s;
  &:hover {
    background-color: #00a8ff;
  }

  @media (min-width: 768px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;
