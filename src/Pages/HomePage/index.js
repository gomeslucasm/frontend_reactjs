import React from 'react';
import DefaultPage from '../../Components/DefaultPage';


class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render(){
        return(
            <>
                <DefaultPage>
                    <p> testao </p>
                </DefaultPage>
            </>
        )
    }
}

export default HomePage