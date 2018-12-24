import React, { Component } from 'react';
import Loading from './Loading.js';
import DataList from './DataList.js';

class Main extends Component {
  state = {
      loading_displayed: true
  };

  render() {
    return (
        <div className="main-wrapper">
            <div className="container">
                {
                    this.state.loading_displayed ? 
                    <Loading displayed={this.state.loading_displayed}></Loading>
                    :
                    <DataList></DataList>
                }
            </div>
        </div>
    );
  }

  componentDidMount(){
      setTimeout(() => {
        this.setState({loading_displayed: false});
      }, 3000);
  }
}

export default Main;
