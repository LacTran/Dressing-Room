import React, { Component } from 'react';

class model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {

            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            model: {
                // width: "125%",
                // height: "125%",
                // overflow: "hidden",
                // position: "absolute",
                // top: "-19%",
                // left: "-9%",
                // zIndex: "2",
                transform: "scale(0.175)",
                width: "372px",
                height: "476px",
                // background: 'url("./images/model/1000new.png")',
                position: "absolute",
                top: "-29%",
                left: "11.5%",
                zIndex: "2"
            }
        })
    }
    // styles = {
    //     // .model
    //     modelClass: {
    //         width: "60px",
    //         height: "77px",
    //         background: 'url("./images/model/1000new.png")',
    //         position: "absolute",
    //         top: "5%",
    //         left: "45.5%",
    //         zIndex: "1"
    //     }
    // }

    render() {
        let imgSrc;
        let newStyle = this.state.model;

        if (this.props.item !== null && this.props.item.type === "model") {
            imgSrc = this.props.item.imgSrc_png;
            // console.log(imgSrc)
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc}) no-repeat`;
            newStyle = { ...newStyle, background }
            // newStyle
        }
        return (
            <div className="model" style={newStyle} >
            </div>
        );
    }
}




export default model;