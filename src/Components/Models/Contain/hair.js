import React, { Component } from 'react'

export default class hair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hair: {

            }
        }
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    changeStyle = () => {
        this.setState({
            hair: {
                width: "1000px",
                height: "1500px",
                position: "absolute",
                top:"-111.5%",
                left: "-60.5%",
                zIndex: "2",
                transform: "scale(0.18)"
            }
        })
    }

    render() {
        let hairImgSrc;
        let newHair = this.state.hair;
        if (this.props.item !== null && this.props.item.type === "hairstyle") {
            hairImgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${hairImgSrc})`;
            newHair = { ...newHair, background }
            // newStyle
        }
        return (
            <div className="hair" style={newHair}>

            </div>
        )
    }
}
