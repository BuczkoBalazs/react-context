import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 20px;
    padding: 10px 20px;
    cursor: pointer;
    color: ${props => props.primary ? "black" : "grey"};
    backgroundcolor: ${props => props.primary ? "grey" : "black"};
`

function Page() {  

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
    <div className={theme} >
        {
            theme === "light" ?
            <Button onClick={toggleTheme} >Change theme</Button> :
            <Button primary onClick={toggleTheme} >Change theme</Button>
        }
    </div>
    )
}

export default Page