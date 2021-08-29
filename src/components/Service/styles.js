import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
    @media screen and (min-width: 1200px) {
        flex: 1 0 33%; 
    }
    background-color: #fff;
    border-radius: 10px;
    border-color: red;
    padding: 1em;
    margin: 1em;
    h3 {
        text-align: center;
        font-weight: 900;
    }
`;