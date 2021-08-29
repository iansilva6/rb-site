import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

// Styles
import { Float } from './styles';

function WhatsappButton(props) {
    return (
        <Float target={"_blank"} href={"https://api.whatsapp.com/send?phone=5571991985448&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20www.rbinspecoes.com.br.%20"}>
            <FontAwesomeIcon icon={faMobileAlt} size="1x" />
        </Float>
    );
}

export default WhatsappButton;