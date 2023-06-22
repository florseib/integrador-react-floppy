import styled from "styled-components";

const StoreContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%
box-sizing: content-box
`;

export const Store = () => {
  return (
    <StoreContainer>
      <h1>NUESTROS LIBROS</h1>
    </StoreContainer>
  );
};
