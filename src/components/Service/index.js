import React from 'react';

// Styles
import { Container } from './styles';

function Service(props) {
    return (
        <Container>
            <h3>{props.data.title}</h3>
            <ul>
                {
                    props.data.array.map((item)=> {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </Container>
    );
}

export default Service;