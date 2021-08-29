import styled from 'styled-components';

import banner from '../../images/banner.webp';

export const Container = styled.header`
    width: 100%;
    padding: 20px;
    background: url(${banner})center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding: 0px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
        padding: 20px 0px;
    }
`;

export const Text = styled.div`
    padding: 10px;
    font-family: 'Sulphur Point', sans-serif;
    color: #fff;
    font-weight: 900;
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
    }
`;