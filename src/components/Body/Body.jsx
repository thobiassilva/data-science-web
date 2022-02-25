import React from "react";
import styled from "styled-components";
import CardImage from "./CardImage/CardImage";
import CardText from "./CardText/CardText";
import notebook from "../../assets/img/notebook.jpg";
import notLed from "../../assets/img/not-led.jpg";
import circulos from "../../assets/img/circulos.jpg";

const MainCardStyled = styled.div`
  width: 100%;
  height: 500px;
  /* background-color: #7f8a8d; */
  display: flex;
`;

export default function Body() {
  return (
    <>
      <br />
      <MainCardStyled>
        <CardText title="Sobre o programa">
          O <strong>Programa Starter Data Science</strong> é um curso? Não! Te
          decepcionei? Calma que vou te explicar e te mostrar que é
          <strong> muito mais</strong> do que isso! Um dos programas mais
          completos de formação em Data Science (ciência de dados), que
          preparará você para atuar em uma das
          <strong> profissões mais demandadas</strong> no mercado. Você
          aprenderá desde o básico de
          <strong> análise de dados, estatística e programação</strong> até
          aspectos avançados, incluindo
          <strong> engenharia de dados e machine learning</strong> (aprendizado
          de máquina), e irá desenvolver aplicações inteligentes capazes de
          prever comportamentos de clientes, sugerir produtos e serviços, e
          resolver uma série de problemas do cotidiano gerando valor para os
          negócios e sociedade como um todo. Contará com um time de apoio para
          preparar e conectar você com oportunidades de trabalho.
        </CardText>

        <CardImage imagem={notebook} />
      </MainCardStyled>
      <br />
      <MainCardStyled>
        <CardImage imagem={circulos} />
        <CardText title="Porque essa formação é completa e inédita?">
          Podemos começar falando da carga horária de 1000h, porém isso é só um
          número.
          <br />
          <br />O <strong> Programa Starter Data Science</strong> é um programa
          de <strong> formação completa</strong>, que passa pela área de dados,
          com suas várias disciplinas, e foca no ensino de Data Science. Ao
          final da formação o profissional estará capacitado a entender as
          várias frentes de trabalho na área de dados, como desenvolver análises
          e construir modelos de Machine Learning.
          <br />
          <br />
          Além disso, como nos demais programas da Growdev, você poderá atuar em
          projetos reais demandados por empresas, terá um desenvolvimento de
          softskills e contará com um time de empregabilidade engajado em
          colocar você em contato com as melhores oportunidades de trabalho.
        </CardText>
      </MainCardStyled>
      <br />
      <MainCardStyled>
        <CardText title="Projetos reais">
          Esse é um dos grandes diferenciais do nosso programa. Você irá atuar
          em projetos contratados por empresas, obtendo uma experiência real no
          desenvolvimento de uma interface. Além de aplicar os conhecimentos
          técnicos adquiridos, você também terá contato com metodologias ágeis e
          ferramentas utilizadas em projetos reais.
        </CardText>
        <CardImage imagem={notLed} />
      </MainCardStyled>
    </>
  );
}
