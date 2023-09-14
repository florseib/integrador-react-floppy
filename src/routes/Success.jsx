import styled from "styled-components";

const StoreContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: content-box
`;

export const Success = () => {
    return (
        <StoreContainer>
            <h1>Compra realizada exitosamente</h1>
        </StoreContainer>
    );
}