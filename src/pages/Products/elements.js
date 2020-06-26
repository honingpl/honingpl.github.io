import styled from "styled-components";

export const ProductsComponent = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.spaceBg};
  flex: 1;
`;
