import { createglobalstyles } from 'styled-components'

const myGlobalStyles = createglobalstyles `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
}

p {
    font-size: 20;
}
`

export default myGlobalStyles