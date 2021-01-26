import React from 'react';
import AnimalForm from '../../Components/AnimalForm';
import PrivateDefaultPage from '../../Components/PrivateDefaultPage';



class AddAnimal extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <PrivateDefaultPage>
                <AnimalForm />
            </PrivateDefaultPage>
        )
    }
}


export default AddAnimal;