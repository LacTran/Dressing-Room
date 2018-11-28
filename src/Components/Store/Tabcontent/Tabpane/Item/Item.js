import React, { Component } from 'react';

class Item extends Component {
    imgSrcTransferItem = () => {
        this.props.imgSrcTransferTabpane(this.props.item);
    }
    render() {

        return (
            <div className="item col-md-4 text-center">
                <img src={this.props.item.imgSrc_jpg} alt="" />
                <button onClick={this.imgSrcTransferItem.bind(this)}>Thử đồ</button>
            </div>
        );
    }
}

export default Item;