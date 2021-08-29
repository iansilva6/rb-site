import React from 'react';

// Styles
import { Container, Text } from './styles';

// Images
import Logo from '../../images/logo.webp';

function Banner(props) {
    return (
        <Container>
            <img width={135} height={135} src={Logo} alt="RB Consultoria, Inspeção e Engenharia. Especializado em NR-13"></img>
            <Text>
                <h1>RB Inspeções, Consultoria e Engenharia.</h1>
                <p>NR-13 | Ensaios Não Destrutivos | Engenharia | Manutenção Alpinismo Industrial</p>
            </Text>
        </Container>
    );
}

export default Banner;