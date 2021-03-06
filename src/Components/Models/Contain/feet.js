import React, { Component } from 'react';

class feet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feetStyle: {

            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            feetStyle: {
                width: "500px",
                height: "1000px",
                // background: `"url(${this.props.item.imgSrc_png})"`,
                position: "absolute",
                top: "-30%",
                left: "-5.1%",
                zIndex: "1",
                transform: "scale(0.5"
            }
        })
    }

    render() {
        let imgSrc;
        let newStyle = this.state.feetStyle;
        if (this.props.item !== null && this.props.item.type === "shoes") {
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }

        }
        return (
            <div className="foot" style={newStyle}>
                <div className="test"></div>
            </div >
        );
    }
}

export default feet;