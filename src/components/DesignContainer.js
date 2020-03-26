import React from 'react';
import '../designpad.css';

class DesignContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            color: 'grey',
            input: 1,
            showPads: true,
            padStyle: 'blackpad'
        }
    }

    changeBackground = (event) => {
        if(this.state.input == 1){
            this.setState({ padStyle: 'blackpad', input: 0 })
        } else{
            this.setState({ padStyle: 'orangepad', input: 1 })
        }
    }

    render(){

        if(this.state.showPads == false){
            return (<div>There's no input! :( </div>)
        } else {
            return(
                <div>
                    <button onClick={()=>this.changeBackground()}> Change Color </button>
                    <div className="blackpad"> </div>
                    <div className="orangepad"> </div>
                    <div className={this.state.padStyle}></div>
                </div>
            )
        }
    }

}

export default DesignContainer