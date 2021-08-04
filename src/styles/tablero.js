import styled from 'styled-components'


export const Game = styled.div`
    display: grid;
    height: ${props => props.modoJuego ? '700px' : '800px'};
    grid-template-rows: ${props => props.modoJuego ? 'repeat(4, 110px)': 'repeat(6,110px)'};
    grid-template-columns: ${props => props.modoJuego ? 'repeat(4, 110px)': 'repeat(6,110px)'};
    justify-content : center;
    align-content: ${props => props.modoJuego ? 'center' : 'flex-end' };
   
`;
// grid-template-rows: 110px 110px 110px 110px;
// repeat(3, 400px); 
