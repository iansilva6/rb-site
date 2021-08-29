import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

// Styles
import { Container, Text } from './styles';

function Banner(props) {
    return (
        <Container>
            <StaticImage 
                width={135} 
                height={135} 
                src="../../images/logo.webp" 
                alt="RB Consultoria, Inspeção e Engenharia. Especializado em NR-13" 
                placeholder="blurred"
                layout="fixed"
            />
            <Text>
                <h1>RB Consultoria, Inspeção e Engenharia.</h1>
                <p>NR-13 | Ensaios Não Destrutivos | Engenharia de Soldagem | Manutenção Alpinismo Industrial</p>
            </Text>
        </Container>
    );
}

export default Banner;