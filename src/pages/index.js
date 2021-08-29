import * as React from "react"
import styled from 'styled-components'
import { Helmet } from "react-helmet"

// Components
import Banner from "../components/Banner"
import Service from "../components/Service"

// Images
import banner from '../images/banner.webp';

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
    title: "Consultoria e Serviços de Engenharia",
    array: [
      "Consultoria em Engenharia de Soldagem",
      "Inspeção em tanques de armazenamento",
      "Elaboração de parecer técnico, laudos e relatórios",
      "Auditoria de qualidade",
      "Consultoria para correções de não conformidade",
      "Coordenação e Gerenciamento de Equipes de Inspeção",
      "Diligencia mento em Montagens Industriais e Fabricação",
      "Acompanhamento de obras mecânicas",
      "Laudos e Relatórios técnicos de Solda"
    ]
  },
  {
    title: "Qualificações, Documentação, Processos e Engenharia de Soldagem",
    array: [
      "Procedimentos de Soldagem (EPS)",
      "Registro de Qualificação do Procedimento de Soldagem (RQPS)",
      "Registro de Qualificação do Soldador (RQS)",
      "Instrução de Execução e Inspeção de Soldagem (IEIS)",
      "Desenvolvimento, Análise, Revisão e Documentação de Qualidade em Solda",
      "Procedimentos de Inspeção e Execução"
    ]
  },
  {
    title: "Ensaios Não Destrutivos",
    array: [
      "Partícula Magnética",
      "Líquido Penetrante",
      "Caixa de Vácuo",
      "Ensaio visual e dimensional de solda",
      "Ultrassom"
    ]
  },
  {
    title: "Manutenção Alpinismo Industrial",
    array: [
      "Manutenção com utilização de alpinismo industrial",
    ]
  }
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
      margin-right: auto;
      margin-left: auto;
  }
`;

const About = styled.div`
  width: 100%;
  padding: 15px;
  p {
    font-size: 18px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0px;
  }
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  h2 {
    width: 100%;
    text-align: center;
    font-weight: 900;
    font-size: 30px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 25px 15px;
  background: url(${banner})center;
  background-size: cover;
`;

const Card = styled.div`
  margin: 1em;
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
      width: 100%;
  }
  h4 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
    margin-left: 0px;
    font-family: 'Sulphur Point', sans-serif;
  } 
  a {
    text-decoration: none;
    color: #ececec;
    font-weight: 300;
  }
  address {
    color: #ececec;
    font-weight: 300;
    font-style: normal;
  }
`;

// markup
const IndexPage = () => {
  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RB Consultoria, Inspeção e Engenharia. Especializado em NR-13</title>
        <link rel="canonical" href="https://rbinspecoes.com.br/" />
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
        <Footer>
          <Card>
            <h4>Endereço</h4>
            <address>
              Avenida Etelvino Alves de Lima 85b, Inácio Barbosa.<br></br>CEP 49040-696. Aracaju/SE
            </address>
          </Card>
          <Card>
            <h4>Telefone</h4>
            <a href="tel:+5571991985448">(71) 9 9198 5448</a>
          </Card>
          <Card>
            <h4>E-mail</h4>
            <a href="mailto:rafaelbarreto.em@gmail.com">rafaelbarreto.em@gmail.com</a>
          </Card>
        </Footer>
      </Container>
    </Main>
  )
}

export default IndexPage
