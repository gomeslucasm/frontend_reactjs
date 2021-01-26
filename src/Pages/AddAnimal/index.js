import React from 'react';
import AnimalForm from '../../Components/AnimalForm';
import DefaultPage from '../../Components/DefaultPage';
import PrivateDefaultPage from '../../Components/PrivateDefaultPage';



class AddAnimal extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
            {/* <PrivateDefaultPage> */}
            {/* </PrivateDefaultPage> */}
            <DefaultPage>
                <AnimalForm />
            </DefaultPage>
            </>
        )
    }
}


export default AddAnimal;