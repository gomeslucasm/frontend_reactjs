import React from 'react'
import {CardHeader, Card} from 'reactstrap';
import './index.css';
/* import API_URL from '../../global' */
import {connect} from 'react-redux';
import Loader from '../Loader';
import AnimalCardPhotos from './Components/AnimalCardPhotos';
import AnimalCardInfo from './Components/AnimalCardInfo';
import AnimalCardButtons from './Components/AnimalCardButtons';
import AnimalCardSex from './Components/AnimalCardSex';


class AnimalCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal:false,
            show:false,
        }
    }

    async componentDidMount() {
        this.setState({show:true})
    }
    
    
    render(){
        if(this.state.show === false){
            return(
                <>
                <Loader display = {true}/>
                </>
            )
        }else{
            return(
                <>
                <Card className = 'animal-card' style = {(this.state.show) ? {display:'block'} : {display:'none'}}>
                    <AnimalCardPhotos
                        animal_photo = {this.props.animal_photo}
                    />
                    <CardHeader tag = 'h5' 
                        style = {{backgroundColor:'#ECECEC',}}
                    >{this.props.animal_type_display}</CardHeader>
                    <AnimalCardSex 
                        sex = {this.props.sex}
                        sex_display = {this.props.sex_display}
                    />
                    <AnimalCardInfo 
                        size_display = {this.props.size_display}
                        location_display = {this.props.location_display}
                        age = {this.props.age}
                        logged = {this.props.logged}
                        id = {this.props.id}
                    />
                    <AnimalCardButtons 
                        show = {this.props.show}
                        logged = {this.props.logged}
                        id = {this.props.id}
                    />
                </Card>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    logged: state.login
})

export default connect(mapStateToProps,null)(AnimalCard);