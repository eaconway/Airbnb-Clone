import React from "react";

class Loading extends React.Component {
  render () {
    return (
      <div className={'loading-screen'}>
        <h1>Loading</h1>
        <div className="lds-facebook"><div></div><div></div><div></div></div>
        <img src={'http://s24195.pcdn.co/wp-content/uploads/2015/02/0.png'} />
      </div>
    )
  }
}

export default Loading;
