import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import NavHeader from './Components/NavHeader';


const Div = styled.div`
    width: 100%;
    min-height: 600px;
    height: auto;
    background-color: #A3B8B5;
    margin-top: 0 px;
    display:flex;
`

const Div2 = styled.div`
    display:block;
    width: 100%;
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
                <Div>
                    <Div2>
                        {this.props.children}
                    </Div2>
                </Div>
            </>
        )
    }
}


export default DefaultPage