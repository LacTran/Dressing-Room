import React, { Component } from 'react';

class bikinibottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikiniBottomStyle: {
                // width: "250px",
                // height: "500px",
                // background: 'url("./images/allbody/bikini_pantsnew.png")',
                // position: "absolute",
                // top: "12%",
                // left: "22%",
                // zIndex: "3"
            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            bikiniBottomStyle: {
                width: "125%",
                height: "125%",
                // background: `"url(${this.props.item.imgSrc_png})"`,
                position: "absolute",
                top: "-17%",
                left: "-9%",
                zIndex: "1",
                transform: "scale(0.5)"
            }
        })
    }

    render() {
        let imgSrc;
        let newStyle = this.state.bikiniBottomStyle;
        // console.log(this.props.item);

        if (this.props.item !== null && this.props.item.type === "botclothes") {
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
            // newStyle
        }

        return (
            <div className="bikiniBottom" style={newStyle}>

            </div>
        );
    }
}

export default bikinibottom;