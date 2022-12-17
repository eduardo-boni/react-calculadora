import styled from 'styled-components';
import gifpaisagem from  './assets/gifpaisagem.gif';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
 
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${gifpaisagem});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 30%;
    background: transparent;

    margin-bottom: 50px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
