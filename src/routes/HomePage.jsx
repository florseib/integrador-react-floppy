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
          <img src="https://res.cloudinary.com/durzkwbnd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697757078/foto_1_jnpnxd.jpg" alt="Mujer leyendo libro"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="https://res.cloudinary.com/durzkwbnd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697757077/foto_2_jhphoj.jpg" alt="Fotos de libros"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="https://res.cloudinary.com/durzkwbnd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697757077/foto_3_kn6oee.jpg" alt="Niño buscando libros"></img>
        </ImageDiv>
        <ImageDiv>
          <img src="https://res.cloudinary.com/durzkwbnd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697757078/foto_4_b1vkkw.jpg" alt="Estantes de librería"></img>
        </ImageDiv>
        <FotoGato>
          <img
            src="https://res.cloudinary.com/durzkwbnd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1697757077/gatito_lnqh6s.jpg"
            alt="Foto del gato de la biblioteca"
          ></img>
        </FotoGato>
      </HeroImages>
    </Hero>
  );
};
