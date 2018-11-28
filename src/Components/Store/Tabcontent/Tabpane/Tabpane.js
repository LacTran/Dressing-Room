import React, { Component } from 'react';

// IMPORT COMPONENT
import Item from './Item/Item';

import room from '../../../../Data/GetData';


class Tabpane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: room.ListOfItems,
            item: null
        }
    }

    // imgSrcTransferTabpane = (item) => {
    //     this.setState({
    //         item
    //     })
    // }

    getElmItem = (tempArr) => {
        let elmItem = tempArr.map((item, index) => {
            return <Item 
            key={index} 
            item={item}
            imgSrcTransferTabpane = {this.props.imgSrcTransferTabcontent}
            />
        })
        return elmItem;
    }

    getTypeArr = (tabType) => {
        let tempArr = [];
        for (let item of this.state.room) {
            if (item.type === tabType) {
                tempArr = [...tempArr, item]
            }
        }
        return tempArr;
    }

    render() {
        // console.log(this.state.item);
        

        let elmItem = null;

        let tempArr = null;
        switch (this.props.buttonItem.tabName) {
            case 'tabTopClothes':
                tempArr = this.getTypeArr("topclothes");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabBotClothes':
                tempArr = this.getTypeArr("botclothes");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabShoes':
                tempArr = this.getTypeArr("shoes");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabHandBags':
                tempArr = this.getTypeArr("handbags");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabNecklaces':
                tempArr = this.getTypeArr("necklaces");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabHairStyle':
                tempArr = this.getTypeArr("hairstyle");
                elmItem = this.getElmItem(tempArr)
                break;
            case 'tabBackground':
                tempArr = this.getTypeArr("background");
                elmItem = this.getElmItem(tempArr)
                break;
            default:
                break;
        }

        return (
            <div className="tab-pane fade in" id={this.props.buttonItem.tabName}>
                {/* <Item buttonItem={this.props.buttonItem} /> */}
                {elmItem}
            </div>
        );
    }
}

export default Tabpane;