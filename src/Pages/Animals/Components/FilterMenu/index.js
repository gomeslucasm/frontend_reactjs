import React from 'react'


class FilterMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            size:{
                'PP':false,
                'P':false,
                'M':false,
                'G':false,
                'GG':false,
            }
        }
        /* this.handleFilterQuery = this.handleFilterQuery.bind(this);
        this.getFilteredData = this.getFilteredData.bind(this); */
        this.handleChange = this.handleChange.bind(this) 
    }

    handleChange(e){
        this.state.size[e.target.name] = e.target.checked
        this.setState({size:{[e.target.name]:e.target.value}})
        console.log(this.state)
    }

    render(){
        return(
            <>
                <div>
                    <form>
                        <div>
                            <label>
                                Muito pequeno
                                <input 
                                name = 'PP' 
                                type = 'checkbox' 
                                onChange={this.handleChange}/>
                            </label>
                            <label>
                                Pequeno
                                <input 
                                name = 'P' 
                                type = 'checkbox' 
                                onChange={this.handleChange}/>
                            </label>
                            <label>
                                Médio
                                <input 
                                name = 'M' 
                                type = 'checkbox' 
                                onChange={this.handleChange}/>
                            </label>
                            <label>
                                Grande
                                <input 
                                name = 'G' 
                                type = 'checkbox' 
                                onChange={this.handleChange}/>
                            </label>
                            <label>
                                Muito grande
                                <input 
                                name = 'GG' 
                                type = 'checkbox' 
                                onChange={this.handleChange}/>
                            </label>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}



export default FilterMenu;

