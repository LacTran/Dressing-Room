import React, { Component } from 'react';
// IMPORT COMPONENT
import Body from './Contain/body';
import Model from './Contain/model';
import BikiniTop from './Contain/bikinitop';
import BikiniBottom from './Contain/bikinibottom';
import Feet from './Contain/feet';

class Contain extends Component {
    render() {
        const styles = {
            // .contain
            containClass: {
                width: "460px",
                height: "590px",
                margin: "0 auto",
                background: 'url("./images/background/background_998.jpg")',
                position: "relative"
            }
        }
        return (
            <div className="contain" style={styles.containClass}>
                <Body item={this.props.item}/>
                <Model item={this.props.item}/>
                <BikiniTop item={this.props.item}/>
                <BikiniBottom item={this.props.item}/>
                <Feet />
            </div>
        );
    }
}

export default Contain;