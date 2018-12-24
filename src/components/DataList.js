import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

class DataList extends Component {
  state = {
     list: [],
     currentPage: 0,
     perPage: 3,
     loadingMessage: '\Loading...'
  }

  loadData = () =>{
    var newPage = this.state.currentPage + 1;
    axios.get('https://reqres.in/api/users?per_page=' + this.state.perPage + '&page=' + newPage).then(result => {
        if (result.status == 200){
            if (this.state.list.length == 0){
                this.setState({list: result.data.data, currentPage: newPage});
            }
            else if (result.data.data.length == null || result.data.data.length == 0){
                this.setState({loadingMessage: "No users are left"})
            }
            else{
                var updatedList = this.state.list.concat(result.data.data);
                this.setState({list: updatedList, currentPage: newPage});
            }
        }
        else{
            alert(result.data.error);
        }
    });
  }

  render() {
    const listItems = this.state.list.map((item) =>
        <li key={item.toString}>
            <img src={item.avatar}></img>
            <span>{item.first_name + " " + item.last_name}</span>
        </li>
    );
    return (
        <div>
            <ul className="datalist">
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadData}
                hasMore={true || false}
                loader={<div className="loader text-center padding-top-s padding-bottom-s" key={0}>{this.state.loadingMessage}</div>}
                useWindow={false}
                threshold={50}
            >
                {listItems}
            </InfiniteScroll>
            </ul>
        </div>
    );
  }
}

export default DataList;
