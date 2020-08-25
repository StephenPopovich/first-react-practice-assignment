// 1. create two new components: UserInput and UserOutput (One of the two new components)
// 2. UserInput should hold an input element

import React from 'react';
// constant and function here
const userInput = (props) => {
// function of the component returning an input element
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
  return <input type="text"
    onChange={props.changed}
    value={props.currentName}  />;
};

export default userInput;
