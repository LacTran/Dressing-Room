import React, { Component } from 'react';
// IMPORT COMPONENT
import Tabpane from './Tabpane/Tabpane';
// IMPORT DATA  
import ButtonArray from '../../../Data/buttonArray';

class Tabcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ButtonArray: ButtonArray
        }
    }
    render() {
        // console.log(this.state.ButtonArray);

        let elmTabpane = this.state.ButtonArray.map((Button, index) => {
            return <Tabpane
                key={index}
                buttonItem={Button}
                imgSrcTransferTabcontent = {this.props.imgSrcTransferStore}
            />
        })
        return (
            <div className="tab-content">
                {elmTabpane}
            </div>
        );
    }
}

export default Tabcontent;