import React, { Component } from "react";
import axios from "axios";


class Api extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
      .then(({ data }) => this.setState({ done: true, items: data }))
      .catch(({ error }) => console.error(error));
 
  }
  render() {
    if (!this.state.done) {
      return <p>Cargando resultados...</p>;
    } else {
      return this.props.children(this.state.items); 
    }
  }
}

export default Api;
