import React from 'react';
import '../designpad.css';

class DesignContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            color: 'orange'
        }
    }

    render(){
        return(
            <div class="pad"> 
            </div>
        )
    }


}

export default DesignContainer