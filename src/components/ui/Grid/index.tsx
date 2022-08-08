import React from 'react';

import styled from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[];
  columns: string;
};

export const Container = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 15px;
  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: ${(props: Props) => `repeat(${props.columns}, 1fr)`};
  }
`;

export const Grid = ({ children, columns }: Props) => {
  return <Container columns={columns}>{children}</Container>;
};
