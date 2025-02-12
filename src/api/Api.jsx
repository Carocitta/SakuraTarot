// import React, { Component } from "react";
// import axios from "axios";

// const List = ({ items }) => (
//   <ul>
//     {items.map((item, i) => (
//       <li key={i}>
//         <p>ID:</p> {item.id} <br />
//         <p>Card Number:</p> {item.cardNumber} <br />
//         <p>Spanish Name:</p> {item.spanishName} <br />
//         <p>English Name:</p> {item.englishName} <br />
//         <p>Kanji:</p> {item.kanji} <br />
//         <p>Rōmaji:</p> {item.Rōmaji} <br />
//         <p>Appeared in Manga:</p> {item.appeardManga} <br />
//         <p>Appeared in Anime:</p> {item.appeardAnime} <br />
//         {item.clowCard && (
//           <img src={item.clowCard} alt="Clow Card" width="50" />
//         )}{" "}
//         {item.sakuraCard && (
//           <img src={item.sakuraCard} alt="Sakura Card" width="50" />
//         )}{" "}
//         {item.cardsReverse.clowReverse && (
//           <img
//             src={item.cardsReverse.clowReverse}
//             alt="Clow Reverse"
//             width="50"
//           />
//         )}{" "}
//         <br />
//         {item.cardsReverse.sakuraReverse && (
//           <img
//             src={item.cardsReverse.sakuraReverse}
//             alt="Sakura Reverse"
//             width="50"
//           />
//         )}{" "}
//         <br />
//         <p>Meaning:</p> {item.meaning} <br />
//         <p>Version:</p> {item.__v} <br />
//         <p>-------------------------------------</p>
//       </li>
//     ))}
//   </ul>
// );

// class Api extends Component {
//   constructor() {
//     super();
//     this.state = {
//       done: false,
//       items: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/")
//       .then(({ data }) => this.setState({ done: true, items: data }))
//       .catch();
//   }
//   render() {
//     return (
//       <div>
//         {this.state.done && Array.isArray(this.state.items) ? (
//           <List items={this.state.items} />
//         ) : (
//           <p>Cargando resultados...</p>
//         )}
//       </div>
//     );
//   }
// }

// export default Api;
 

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
      .catch();
 
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