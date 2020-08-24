// 1. create two new components: UserInput and UserOutput (One of the two new components)
// 2. UserOutput should hold two paragrpahs elements

import React from 'react';
// constant and function here
const userOutput = () => {
// function of the component returning an input element
  return (
// Must wrap component in div if you want to return more than one element
    <div>
     <p>Paragraph one text.</p>
     <p>Paragraph two text.</p>
    </div>
  )
};

export default userOutput;
