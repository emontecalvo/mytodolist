import React from 'react';
import {connect} from 'react-redux';


const ListItems = ({ items }) => {



  console.log(items);
  return (
    <ul>
      {items.map((item, index) => {
        console.log("item is:", item);
        return <li key={index}>{item} <button onClick={() => removeItem(item)}>remove</button></li>;
      })}
    </ul>
  )
}

module.exports = ListItems;



        // return <li key={index}>{item} <button onClick={item.removeItem}>remove</button></li>;
