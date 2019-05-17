import React, { Component } from 'react';

class necklace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            necklaceStyle: {

            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            necklaceStyle: {
                width: "125%",
                height: "125%",
                // background: `"url(${this.props.item.imgSrc_png})"`,
                position: "absolute",
                top: "-19%",
                left: "-9%",
                zIndex: "3",
                transform: "scale(0.5)"
            }
        })
    }

    render() {
        let imgSrc;
        let newStyle = this.state.necklaceStyle;
        // console.log(this.props.item);

        if (this.props.item !== null && this.props.item.type === "necklaces") {
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
            // newStyle
        }

        return (
            <div className="necklace" style={newStyle}>

            </div>
        );
    }
}

export default necklace;