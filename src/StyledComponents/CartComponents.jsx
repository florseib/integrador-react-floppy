import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const BuyButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 95%;
`;
