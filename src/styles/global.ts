import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  background-color: ${({theme})=>theme.background}
}
`;