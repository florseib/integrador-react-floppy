import styled from "styled-components";

export const BookContainer = styled.section`
display: flex;
width: 95%;
flex-direction: row;
flex-wrap: wrap;
justify-content: left;

    @media (min-width: 1201px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
    }

    @media (max-width: 768px) {
        width: 95%;
    }
}
`;

export const BookCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: ${(props) => (props.isLogged ? "41rem" : "30rem")};
  background-color: #ffc446;
  border-radius: 30px;
  margin: 20px 5%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1201px) {
    width: 27%;
    margin: 40px 3%;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 1.5rem;
  height: 60%;
  width: 100%;

  & img {
    max-height: 100%;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  height: ${(props) => (props.isLogged ? "25%" : "40%")};
  width: 100%;
  padding: 0px 30px;
  font-weight: bold;

  & p {
    margin: 8px 0px;
  }

  & h2 {
    margin: 8px 0px;
  }
`;

export const ButtonContainer = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 95%;
  background-color: #ffc446;
  border-radius: 30px;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #ffc446;
    margin: 20px 0;
    padding: 2rem 1rem;
  }

  @media (min-width: 769px) {
    height: 20rem;
    padding: 2.5rem 3rem;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const OrderCardContainer = styled(CartCard)`
  height: auto;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;

  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const CartBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  h2,
  p {
    margin: 0.5rem;
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
  width: 20%;
  max-height: 100%;

  img {
    max-height: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
