import React from 'react';
import DefaultPage from '../../Components/DefaultPage';


class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
      
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