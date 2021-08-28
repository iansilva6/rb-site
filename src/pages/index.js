import * as React from "react"
import styled from 'styled-components'
import { Helmet } from "react-helmet"

// Components
import Banner from "../components/Banner"
import Service from "../components/Service"

const services = [
  {
    title: "Adequação a NR-13",
    array: [
      "Inspeção inicial periódica, extraordinária de caldeiras, vasos de pressão e tubulações industriais",
      "Acompanhamento de teste hidrostático",
      "Reconstituição de prontuário técnico (cálculo de espessura mínima, PMTA, desenhos e etc.)",
      "Classificação conforme classe NR-13",
      "Elaboração de projetos de instalação",
      "Treinamento para operadores em unidades de processo para atendimento a NR-13",
      "Elaboração de planos de inspeção"
    ]
  },
  {
    title: "Adequação a NR-13",
    array: [
      "Inspeção inicial periódica, extraordinária de caldeiras, vasos de pressão e tubulações industriais",
      "Acompanhamento de teste hidrostático",
      "Reconstituição de prontuário técnico (cálculo de espessura mínima, PMTA, desenhos e etc.)",
      "Classificação conforme classe NR-13",
      "Elaboração de projetos de instalação",
      "Treinamento para operadores em unidades de processo para atendimento a NR-13",
      "Elaboração de planos de inspeção"
    ]
  },
  {
    title: "Adequação a NR-13",
    array: [
      "Inspeção inicial periódica, extraordinária de caldeiras, vasos de pressão e tubulações industriais",
      "Acompanhamento de teste hidrostático",
      "Reconstituição de prontuário técnico (cálculo de espessura mínima, PMTA, desenhos e etc.)",
      "Classificação conforme classe NR-13",
      "Elaboração de projetos de instalação",
      "Treinamento para operadores em unidades de processo para atendimento a NR-13",
      "Elaboração de planos de inspeção"
    ]
  },
  {
    title: "Adequação a NR-13",
    array: [
      "Inspeção inicial periódica, extraordinária de caldeiras, vasos de pressão e tubulações industriais",
      "Acompanhamento de teste hidrostático",
      "Reconstituição de prontuário técnico (cálculo de espessura mínima, PMTA, desenhos e etc.)",
      "Classificação conforme classe NR-13",
      "Elaboração de projetos de instalação",
      "Treinamento para operadores em unidades de processo para atendimento a NR-13",
      "Elaboração de planos de inspeção"
    ]
  },
]

// Styles
const Main = styled.main`
    max-width: 100%;
`;

const Container = styled.div`
    width: 100%;
    background: #EEEEEE;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Lato', sans-serif;
    @media screen and (min-width: 1200px) {
        max-width: 1040px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
`;

const About = styled.div`
    width: 100%;
    p {
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
    }
`;

const Services = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2 {
      width: 100%;
      text-align: center;
      font-weight: 900;
      font-size: 30px;
    }
`;

// markup
const IndexPage = () => {
  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RB Consultoria, Inspeção e Engenharia. Especializado em NR-13</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Banner/>
        <About>
          <p>Oferecemos serviços de consultoria e inspeções para empresas e industrias na <b>região metropolitana de Salvador/BA</b>.</p>
        </About>
        <Services>
          <h2>Nossos Serviços</h2>
          {
            services.map((item)=> {
              return (
                <Service
                  data={item}
                />
              )
            })
          }
        </Services>
      </Container>
    </Main>
  )
}

export default IndexPage
