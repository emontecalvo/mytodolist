import React from 'react';
import {connect} from 'react-redux';


//var ListItems = React.createClass({})
const ListItems = ({ items, removeItem, editItem }) => {
  // var that = this;
  // console.log("*** this", this);


  console.log(items);
  return (
    <ul>
      {items.map((item, index) => {
        return <li
                  key={index}>{item}
                  <button onClick={() => removeItem(item)}>remove</button>
                  <button onClick={() => editItem(item)}>edit</button>
              </li>;
      })}
    </ul>
  )
}

module.exports = ListItems;



