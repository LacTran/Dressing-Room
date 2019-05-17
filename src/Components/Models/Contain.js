import React, { Component } from 'react';
// IMPORT COMPONENT
import Body from './Contain/body';
import Model from './Contain/model';
import Hair from './Contain/hair';
import Bag from './Contain/bag';
import Necklace from './Contain/necklace'
import BikiniTop from './Contain/bikinitop';
import BikiniBottom from './Contain/bikinibottom';
import Feet from './Contain/feet';

class Contain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topItem: [],
            botItem: [],
            shoeItem: [],
            bagItem: [],
            model: [],
            necklaceItem: [],
            hairItem: [],
            background: {
                width: "460px",
                height: "590px",
                margin: "0 auto",
                background: 'url("./images/background/background_998.jpg")',
                position: "relative"
            }

        }
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            switch (this.props.item.type) {
                case "topclothes":
                    this.setState({
                        topItem: this.props.item
                    })
                    break;
                case "botclothes":
                    this.setState({
                        botItem: this.props.item
                    })
                    break;
                case "shoes":
                    this.setState({
                        shoeItem: this.props.item
                    })
                    break;
                case "handbags":
                    this.setState({
                        bagItem: this.props.item
                    })
                    break;
                case "necklaces":
                    this.setState({
                        necklaceItem: this.props.item
                    })
                    break;
                case "model":
                    this.setState({
                        model: this.props.item
                    })
                    break;
                case "hairstyle":
                    this.setState({
                        hairItem: this.props.item
                    })
                    break;
                case "background":
                    let imgSrc = this.props.item.imgSrc_png;
                    this.setState({
                        background: {
                            width: "460px",
                            height: "590px",
                            margin: "0 auto",
                            background: `url(${imgSrc}) no-repeat`,
                            position: "relative"
                        }
                    })
                    break;
                default:
                    break;
            }
        }, 1)
    }

    render() {
        return (

            <div className="contain" style={this.state.background}>
                <Body item={this.props.item} />
                <Model item={this.state.model} />
                <Hair item={this.state.hairItem} />
                <Bag item={this.state.bagItem} />
                <Necklace item={this.state.necklaceItem} />
                <BikiniTop item={this.state.topItem} />
                <BikiniBottom item={this.state.botItem} />
                <Feet item={this.state.shoeItem} />
            </div>
        );
    }
}

export default Contain;