import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div>Carregando...</div>
        <div className="loading-item" />
      </div>
    );
  }
}

export default Loading;
