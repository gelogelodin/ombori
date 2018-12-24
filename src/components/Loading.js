import React, { Component } from 'react';

class Loading extends Component {
    
  render() {
    return (
        <div className={"loading-wrapper " + (this.props.displayed ? 'loading-show' : 'loading-hidden')}>
            <video className="" autoPlay={true}>
                <source type="video/mp4" data-reactid=".0.1.0.0.0" src="pulse.mp4" />
            </video>
        </div>
    );
  }
}

export default Loading;
