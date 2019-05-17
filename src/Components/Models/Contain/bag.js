import React, { Component } from 'react';

class bag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bagStyle: {

            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            bagStyle: {
                width: "125%",
                height: "125%",
                overflow: "hidden",
                position: "absolute",
                top: "-19%",
                left: "-9%",
                zIndex: "2",
                transform: "scale(0.5)"
            }
        })
    }

    render() {
        let imgSrc;
        let newStyle = this.state.bagStyle;
        // console.log(this.props.item);

        if (this.props.item !== null && this.props.item.type === "handbags") {
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc}) no-repeat`;
            newStyle = { ...newStyle, background }
            // newStyle
        }

        return (
            <div className="bag" style={newStyle}>

            </div>
        );
    }
}

export default bag;