import React from 'react'
/* import { ThemeConsumer } from 'styled-components'; */
import './index.css'



class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {menu:{},
            query:{},
            real_query:{},
        }
        this.teste= this.teste.bind(this);
        this.getQueryFilter = this.getQueryFilter.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.getQueryFilter = this.getQueryFilter.bind(this)
    }
    componentDidMount(){
        /* console.log(this.props) */
        var n_keys = Object.keys(this.props.choices).length
        var dict_keys = Object.keys(this.props.choices)
        var new_state_query = {}
        var new_state_menu = {}
        for(var i=0; i<n_keys; i++){
            /* Chaves para a query */
            var choice_keys = Object.keys(this.props.choices[dict_keys[i]])
            var choice_values = Object.values(this.props.choices[dict_keys[i]])
            var dict_key = dict_keys[i]
            var query_dict = {}
                for(var j=0; j<choice_keys.length; j++){
                    var choice_value = choice_values[j]
                    query_dict[choice_value]=false 
                }
            new_state_menu[dict_key] = choice_keys
            new_state_query[dict_key] = query_dict
        }
        console.log(new_state_menu)
        console.log(new_state_query)
        this.setState({menu:new_state_menu})
        this.setState({query:new_state_query})
        this.setState({real_query:new_state_query})
        console.log(this.props)
    }
    teste(){
        console.log(this.state)
    }
    /* Função que atualiza os valores do checkbox no state */
    handleChangeCheckbox(e){
        /* Valor do checkbox */
        var value = e.target.checked
        /* Chave do checkbox group */
        var id = e.target.id
        /* Chave do checkbox */
        var name = e.target.name
        /* Atualizando o state */
        var new_state = this.state['real_query']
        new_state[id][name] = value
        this.setState({'real_query':new_state})        
    }

    getQueryFilter(){
        /* String vazia para a querie total */
        var url_query = String();
        /* Contador do número de queries */
        var query_count = 0;
        /* Nome das queries */
        var dict_keys = Object.keys(this.state['real_query'])
        /* Número de chaves das queries */
        var n_dict_keys = dict_keys.length
        for(var i=0;i<n_dict_keys;i++){
            /* String com os parâmtros para uma query */
            var str_param = String()
            /* Contador dos parâmtros */
            var param_count = 0;
            /* Chave da query */
            var dict_key = dict_keys[i];
            /* Chave dos parâmetros */
            var param_keys = Object.keys(this.state['real_query'][dict_key]);
            /* Número de parâmetros para a querie */
            var n_param_keys = param_keys.length
            /* For para escrever os parametros da querie */
            for(var j=0; j<n_param_keys;j++){
                /* Nome do parâmetro */
                var param_key = param_keys[j]
                /* Valor do parâmetro */
                var param_value = this.state['real_query'][dict_key][param_key];
                /* Se o parâmetro for verdadeiro ele escreve */
                if(param_value===true){
                    /* Caso seja o segundo parâmetro ser escrito, um '-' é adicionado */
                    if(param_count>0){
                        str_param = str_param + '-' + String(param_key);
                    }else{
                        str_param = String(param_key);
                    }
                    /* Adicionando valor ao contador */
                    param_count =  param_count + 1;
                }
            }
            /* console.log(str_param) */
            /* Caso forem adicionados um parâmetro para a querie, ela é valida 
            e é adicionado um valor para o contador 'query_count'.
            Caso já haja uma querie valida, é adicionado um '&'.
            */
            if(param_count>0){
                if(query_count>0){
                    url_query = url_query + '&' + String(dict_key) + '=' + str_param
                }else{
                    url_query = String(dict_key) + '=' + str_param
                }
                query_count = query_count +1
            }
        }
        this.props.url_queryCallback(url_query);
    }

    render(){

        var dict_keys = Object.keys(this.state.menu)
        var n_dict_keys = dict_keys.length
        var items = []
        for(var i=0;i<n_dict_keys;i++){
            var checkbox_items = []
            var dict_key = dict_keys[i]
            /* Nome para o grupo de checkboxes */
            var group_checkbox_label = this.props.choices_name[i]
            /* Nomes para os checkboxes */
            var  checkbox_labels = this.state.menu[dict_keys[i]]
            /* Keys da query (para colocar no valor do checkbox) */
            var checkbox_dict_keys = Object.keys(this.state.query[dict_key])
            /* Número de keys */
            var n_checkbox_dict_keys = checkbox_dict_keys.length
            for(var j=0; j<n_checkbox_dict_keys;j++){
                /* Label do checkbox */
                var checkbox_label = checkbox_labels[j]
                /* name do checkbox */
                var checkbox_dict_key = checkbox_dict_keys[j]
                /* Render do checkbox */
                checkbox_items.push(
                    <div className = 'checkbox-wraper' >
                    <label>
                        <input 
                        name = {String(checkbox_dict_key)} 
                        type = 'checkbox'
                        id = {dict_key}
                        onChange = {this.handleChangeCheckbox}
                        className = 'checkbox-filter'
                        /> {checkbox_label}
                    </label>
                    </div>
                )
            }
            /* Render do grupo do checkbox */
            items.push(
                <>
                    <li>
                    {group_checkbox_label}:
                        {checkbox_items}
                    
                    </li>
                </>
            )
        }
        return(
                <div width = '100%' height = 'auto' display = 'flex'>
                    <ul className = 'ul'>
                        {items}
                    </ul>
                    <button onClick={this.teste}>Teste</button>
                    <button onClick={this.getQueryFilter}>Testar filtro</button>
                </div>
        )
    }
}

export default Menu;