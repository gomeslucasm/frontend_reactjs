import React from 'react';
import Header from './Components/Header';
import styled from 'styled-components';
import NavHeader from './Components/NavHeader';
import Loader from '../Loader'
import {connect} from 'react-redux'
import {is_logged} from '../../Store/Login/login.actions'
import Footer from './Components/Footer';

const Div = styled.div`
    max-width: 100%;
    width:auto;
    min-height: 50vh;
    height: auto;
    background-color: #f1f3f2;
    margin-top: 0 px;
    display:flex;
    /* margin-top: 56px; */
`

const Div2 = styled.div`
    display:block;
    position:relative;
    width:100%;
    min-height:10vh;
    height:auto;
    @media (max-width: 479px){
        max-width: 100%;
        width:100%;
        min-height:600px;
        height:auto;
    }
    margin-top: 1rem;
    margin-bottom:0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
`

class DefaultPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display:false,
        };
      }

    componentDidMount(){
        this.setState({display:true})
        this.props.is_logged()
    }

    render(){
        if(this.state.display){
            return(
                <>  
                    <Header/>
                    <NavHeader/>
                    <Div id = 'div-1-default-page'>
                        <Div2 id = 'div-2-default-page'>
                            {this.props.children}
                        </Div2>
                    </Div>
                    <Footer/>
                </>
            )
        }else{
            return(
                <>
                    <Header/>
                    <NavHeader/>
                    <Div id = 'div-1-default-page'>
                        <Div2 id = 'div-2-default-page'>
                            <Loader display = {!this.state.display}/>
                        </Div2>
                    </Div>
                    <Footer/>
                </>
            )
        }
        
    }
}

/* const mapStateToProps = (state) => ({
    
})
 */
const mapDispatchToProps = dispatch => ({
    is_logged: () => dispatch(is_logged())
})

export default connect(null,mapDispatchToProps)(DefaultPage)