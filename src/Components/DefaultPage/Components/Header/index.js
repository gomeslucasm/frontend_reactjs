import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    width:100%;
    height:200px;
    background-color: gray;
    align-items:center;
    justify-content: center;
    vertical-align: center;
    margin-bottom: 0;
`
const Img = styled.img`
    display: inline;
    height:50%;
    width:auto;
    margin-left: auto;
    margin-right: auto;
`

function Header(){
    return(
        <>
            <Div>
                <Img alt = 'logo'
                src = 'https://pesmcopt.com/admin-media/images/default-logo.png'/>
            </Div>
        </>
    )
}

export default Header;