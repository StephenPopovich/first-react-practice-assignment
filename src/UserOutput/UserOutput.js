// 1. create two new components: UserInput and UserOutput (One of the two new components)
// 2. UserOutput should hold two paragrpahs elements

import React from 'react';
// constant and function here, can get access to the props passed in by React by accepting an arugment in the funciton and then output it.
const userOutput = (props) => {
// function of the component returning an input element
  return (
// Must wrap component function in div if you want to return more than one element
// Output/pass dynamic content between single curly braces
    <div>
     <p>Username: {props.userName}</p>
     <p>I hope I'll be overwritten</p>
    </div>
  )
};

export default userOutput;
