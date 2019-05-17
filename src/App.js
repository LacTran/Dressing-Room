import React, { Component } from 'react';

import './App.css';
// IMPORT COMPONENTS
import Contain from './Components/Models/Contain';
import Store from './Components/Store/Store';
import BtnGroup from './Components/Store/BtnGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }


  imgSrcTransferApp = (item) => {
    this.setState({
      item
    })
  }

  render() {
    console.log(this.state.item);

    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center">Dressing Room Project</h1>
          <div className="row">
            {/* Chứa các items */}
            <div className="col-md-8 col-lg-8">
              <BtnGroup />
              <Store imgSrcTransferApp={this.imgSrcTransferApp.bind(this)} />
            </div>

            {/* Chứa người mẫu */}
            <div className="col-md-4 col-lg-4">
              <Contain item={this.state.item} />
            </div>
          </div>
        </div>
        <footer className="fixed-bottom text-center mb-0"><span class="lead">Made by &copy; Lac Tran</span></footer>
      </div>
    );
  }
}

export default App;
