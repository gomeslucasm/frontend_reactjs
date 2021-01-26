import React from 'react';
import TesteChildren from './Components/TesteChildren';
import Menu from './Components/Menu';

class Teste extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    handleChange = (count) => {
        console.log('kakakaak')
        console.log(count)
        this.setState({count:count})
        console.log(this.state)
        /* var lang = this.dropdown.value;
        this.props.onSelectLanguage(lang);  */           
    }

    render(){
        return(
            <>
                <div>
                    <TesteChildren countCallback={this.handleChange}/>
                    <p>Teste</p>
                    <p>{this.state.count}</p>
                </div>
                <div>
                    <Menu
                    choices = {{
                        'size':{
                            'Muito pequeno':'PP',
                            'Pequeno':'P',
                            'Médio':'M',
                            'Grande':'G',
                            'Muito grande':'GG'
                            },
                        'animal_type':{
                            'Cachorro':'d',
                            'Gato':'c'
                        }
                        }}
                    choices_name = {['Tamanho','Tipo de animal']}/>
                </div>
            </>
        )
    }
}


export default Teste;