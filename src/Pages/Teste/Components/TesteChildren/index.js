import React from 'react';






class TesteChildren extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        console.log(this.state.count)
    }
    handleChange(ev){
        var count = this.state.count + 1
        this.setState({ count: count })
        this.props.countCallback(count);
    }
    render(){
        return(
        <>
            <button onClick={this.handleChange}>Contador</button>
            <p>{this.state.count}</p>
        </>
        )
    }
}

export default TesteChildren;