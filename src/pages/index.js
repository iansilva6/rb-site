import * as React from "react"
import styled from 'styled-components'
import SEO from "../components/seo"

// Components
import Banner from "../components/Banner"
import Service from "../components/Service"
import WhatsappButton from "../components/WhatsappButton"

// Images
import banner from '../images/banner.webp';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
  border-left: 2px solid #ececec;
  border-right: 2px solid #ececec;
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
    line-height: 28px;
    b {
      font-weight: 900;
    }
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
    color: #CC701A;
  }
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px 15px;
  background: url(${banner})center;
  background-size: cover;
  @media screen and (min-width: 1200px) {
    flex: 1 0 33%; 
  }
`;

const Card = styled.div`
  margin: 1em;
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
      width: 100%;
  }
  svg {
    color: #CC701A;
    opacity: 1;
  }
  h4 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 700;
    margin-left: 0px;
    margin-top: 20px;
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
      <SEO/>
      <Container>
        <Banner/>
        <About>
          <p>
            Com mais de <b>15 anos</b> de experiência, oferecemos serviços de consultoria e inspeções para empresas e industrias. 
            Somos especializados em <b>NR-13</b>, oferecendo serviços de inspeção, treinamento e consultoria, além de outros 
            serviços correlatos a <b>Engenharia Mecânica</b>.
          </p>
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
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            <h4>Endereço</h4>
            <address>
              Rua da Mangaba S/N, Bairro: Parque Real<br></br>Serra Verde. CEP 42.813-052. Camaçari/BA.
            </address>
          </Card>
          <Card>
            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
            <h4>Telefone</h4>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5571991985448&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20www.rbinspecoes.com.br.%20">(71) 9 9198 5448 (WhatsApp)</a>
          </Card>
          <Card>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h4>E-mail</h4>
            <a href="mailto:rafaelbarreto.em@gmail.com">rafaelbarreto.em@gmail.com</a>
          </Card>
        </Footer>
      </Container>
      <WhatsappButton/>
    </Main>
  )
}

export default IndexPage
