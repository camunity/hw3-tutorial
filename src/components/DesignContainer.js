import React from 'react';
import '../designpad.css';

class DesignContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            color: 'grey',
            input: 1
        }
    }

    changeBackground = (event) => {
        if(this.state.input == 1){
            this.setState({ color: 'blue', input: 0 })
        } else{
            this.setState({ color: 'red', input: 1 })
        }
    }

    render(){
        
        return(
            <div>
                <button onClick={()=>this.changeBackground()}> Change Color </button>
                <div className="blackpad"> </div>
                <div className="orangepad"> </div>
                <div className="pad" style={{ background: this.state.color }}></div>
            </div>
        )
    }

}

export default DesignContainer