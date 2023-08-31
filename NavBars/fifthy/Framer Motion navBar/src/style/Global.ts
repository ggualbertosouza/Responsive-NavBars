import {createGlobalStyle} from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Teko', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    body{
        background: ${theme.color.bg};
        color: ${theme.color['ligth-blue']};
        font-size: 1.6rem;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
`