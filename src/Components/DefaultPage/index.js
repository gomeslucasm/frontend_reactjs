import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import NavHeader from './Components/NavHeader';


const Div = styled.div`
    max-width: 100%;
    width:auto;
    min-height: 100vh;
    height: auto;
    background-color: #A3B8B5;
    margin-top: 0 px;
    display:flex;
`

const Div2 = styled.div`
    display:block;
    
    width:100%;
    @media (max-width: 479px){
        max-width: 100%;
        width:auto;
    }
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 3%;
    margin-right: 3%;
`

class DefaultPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render(){
        return(
            <>
                <Header/>
                <NavHeader/>
                <Div id = 'div-1-default-page'>
                    <Div2 id = 'div-2-default-page'>
                        {this.props.children}
                    </Div2>
                </Div>
            </>
        )
    }
}


export default DefaultPage