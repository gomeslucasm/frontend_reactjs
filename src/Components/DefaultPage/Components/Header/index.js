import React from 'react';
import styled from 'styled-components';
import banner from '../../../../Utils/src/banner.png'

const Div = styled.div`
    display: flex;
    width:100%;
    height:200px;
    background-color:#189AB4;
    align-items:center;
    justify-content: center;
    margin-bottom: 0;
`
const Img = styled.img`
    display: inline;
    height:90%;
    @media (max-width: 576px){
        height:60%;
    }
    background-color: white;
    border-radius:30rem;
    width:auto;
    /* margin-left: auto;
    margin-right: auto; */
`

function Header(){
    return(
        <>
            <Div>
                <Img alt = 'logo'
                src = {banner} />
            </Div>
        </>
    )
}

export default Header;