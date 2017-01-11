import React from 'react';
import {connect} from 'react-redux';


const editItemForm = ({wordToEdit, editItem}) => {
  console.log(wordToEdit);

    return(
       <div>
    <form
      onSubmit={(e) => {
        e.preventDefault()
        let userInput = e.target.userInput.value
        editItem(userInput)
        e.target.userInput.value = ''
      }}
    >

      <input type="text" placeholder={wordToEdit} name="userInput" />

    <button type="submit">
      Save Edit
    </button>
  </form>
      </div>
    )

}

module.exports = editItemForm;