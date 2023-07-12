import styled from "styled-components";
import { Section } from "./Components";

export const Hero = styled(Section)`
  padding: 20px 60px;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

export const HeroIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
  }
`;

export const HeroImages = styled.div`
  border-top: 1px solid #4681ff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px 1%;
  max-width: 50%;
  max-height: 450px;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    transition: transform 0.2s;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const FotoGato = styled(ImageDiv)`
  max-height: 650px;
`;
