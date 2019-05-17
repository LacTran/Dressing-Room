import React, { Component } from 'react';

class bikinitop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // bikiniTopStyle: {
            //     width: "250px",
            //     height: "500px",
            //     background: 'url("./images/allbody/bikini_branew.png")',
            //     position: "absolute",
            //     top: "12%",
            //     left: "22%",
            //     zIndex: "1"
            // }
        }
    }






    changeStyle = () => {
        this.setState({
            bikiniTopStyle: {
                width: "500px",
                height: "500px",
                // background: `"url(${this.props.item.imgSrc_png})"`,
                position: "absolute",
                top: "-9%",
                left: "-5%",
                zIndex: "2",
                transform: "scale(0.5"
            }
        })
    }
    componentWillReceiveProps(){
        
        this.changeStyle();
    }
    render() {
        let imgSrc;
        let newStyle  = this.state.bikiniTopStyle;
        // console.log(this.props.item);
        
        if (this.props.item !== null && this.props.item.type ==="topclothes"){
            imgSrc = this.props.item.imgSrc_png;
            // newStyle.background = `url(${imgSrc})`;
            let background = `url(${imgSrc})`;
            newStyle = {...newStyle,background}
            
        }
        return (
            <div className="bikinitop" style={newStyle}>

            </div>
        );
    }
}

export default bikinitop;