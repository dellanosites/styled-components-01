import styled from "styled-components"

const Title = styled.h1`
font-size: 2.5rem;
color: ${props => props.theme.colors.black};
text-align: center; 
margin: 20px 0;
padding: 10px;
background-color: ${props => props.theme.colors.white};
border: 2px solid #333;
border-radius: 8px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Sombra */
`

Title.defaultProps = {
    children: 'Adicionar um titulo pfv.'
}

export default Title