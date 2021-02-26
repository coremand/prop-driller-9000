import React, { Component } from 'react';
import Transformer from "../Components/Transformer"

class TransformersSection extends Component {

  render() {
    return (
      <section className = "transformers-section">
        {/* Transformers here */}
        <Transformer url = {this.props.urls[0]}/>
        <Transformer url = {this.props.urls[1]}/>
        <Transformer url = {this.props.urls[2]}/>

      </section>
    );
  }
}

export default TransformersSection;
