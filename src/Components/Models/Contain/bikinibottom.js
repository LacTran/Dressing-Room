import React, { Component } from 'react';

class bikinibottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikinibottomClass: {
                width: "250px",
                height: "500px",
                background: 'url("./images/allbody/bikini_pantsnew.png")',
                position: "absolute",
                top: "12%",
                left: "22%",
                zIndex: "1"
            }
        }
    }
    changeStyle = () => {
        this.setState({
            bikiniTopStyle: {
                width: "250px",
                height: "500px",
                // background: `"url(${this.props.item.imgSrc_png})"`,
                position: "absolute",
                top: "12%",
                left: "22%",
                zIndex: "1"
            }
        })
    }
    render() {
        let imgSrc;
        let newStyle = this.state.bikiniTopStyle;
        // console.log(this.props.item);

        if (this.props.item !== null) {
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
        }

        return (
            <div className="bikinibottom" style={newStyle}>

            </div>
        );
    }
}

export default bikinibottom;