import React, { Component } from "react";
import * as _ from "lodash";
export const styleColor = {
  diamonds: { backgroundColor: "red" },
  hearts: { backgroundColor: "red" },
  spades: { backgroundColor: "black" },
  clubs: { backgroundColor: "black" }
};

export const staticCardHolder = ["clubs", "diamonds", "hearts", "spades"];

export const staticCards = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king"
];

/** Card , { rank , color , inDeck } */
function Card({rank, color, inDeck}){
  let styleCard = {
    // opacity: inDeck ? 0 : 1,
    position: 'relative',
    left: Math.random() * 700,
    top: Math.random() * 700,
    right: Math.random() * 700,
    bottom: Math.random() * 700,
    
  }
  console.log(styleColor)
  let cardColor = styleColor[color]
  styleCard = _.assign(styleCard, cardColor)
  return <div key={`${rank} of ${color}`} className='styleCard' style={styleCard}>{rank}</div>;
};

export default class CardTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {}
    };
  }

  name(params) {}

  render() {
    return (
      <div className="cardTable">
        {_.map(staticCardHolder, element => {
          return <div className="cardHolder" style={styleColor[element]} />;
        })}

       
       {_.map(staticCards, rank => {
          return _.map(staticCardHolder , color => {
                console.log(Card({rank, color, inDeck:false}))
                return Card({rank, color, inDeck:false})
          })
        })} 
      </div>
    );
  }
}
