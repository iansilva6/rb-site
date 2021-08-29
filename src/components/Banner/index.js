import React from 'react';

// Styles
import { Container, Text } from './styles';

// Images
import Logo from '../../images/logo.png';

function Banner(props) {
    return (
        <Container>
            <img width={134} height={133} src={Logo} alt="RB Consultoria, Inspeção e Engenharia. Especializado em NR-13"></img>
            <Text>
                <h1>RB Inspeções, Consultoria e Engenharia.</h1>
                <p>NR-13 | Ensaios Não Destrutivos | Engenharia | Manutenção Alpinismo Industrial</p>
            </Text>
        </Container>
    );
}

export default Banner;