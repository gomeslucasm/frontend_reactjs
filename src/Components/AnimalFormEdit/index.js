import React from 'react';

const privateService = new apiPrivateService();

class AnimalFormEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data = {
                
            }
        };
    }

    async componentDidMount() {
        const data = await privateService.getAnimal(props.id);
        this.setState({data:data})
    }

    return(){
        <>
            <div>

            </div>
        </>
    }
}

export default AnimalFormEdit;
