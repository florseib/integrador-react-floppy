import styled from "styled-components";
import { Section } from "../StyledComponents/Components";
import {
  FotoGato,
  Hero,
  HeroImages,
  HeroIntro,
  ImageDiv,
} from "../StyledComponents/HomePageComponents";

export const HomePage = () => {
  return (
    <Hero>
      <HeroIntro>
        <h2>Bienvenido a Librería "El Gato Lector"</h2>
        <p>
          Buscamos facilitar a nuestros clientes el acceso a los libros, porque
          creemos que todos tienen derecho al conocimiento.
        </p>
      </HeroIntro>
      <HeroImages>
        <h2>Imágenes</h2>
        <ImageDiv>
          <img src="./images/foto_1.jpg" alt="Mujer leyendo libro"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="./images/foto_2.jpg" alt="Fotos de libros"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="./images/foto_3.jpg" alt="Niño buscando libros"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="./images/foto_4.jpg" alt="Estantes de librería"></img>
        </ImageDiv>
        <FotoGato>
          <img
            src="./images/gatito.jpg"
            alt="Foto del gato de la biblioteca"
          ></img>
        </FotoGato>
      </HeroImages>
    </Hero>
  );
};
