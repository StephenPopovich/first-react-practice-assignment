import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// imports component #1 UserInput, do not need to specify .js because it is a JavaScript file
import UserInput from './UserInput/UserInput';
// imports component #2 UserOutput, do not need to specify .js because it is a JavaScript file
import UserOutput from './UserOutput/UserOutput';

// Task instructions:
// 1. create two new components: UserInput and UserOutput
// 2. UserInput should hlid an input element, UserOutput two paragrpahs
// 3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// 4. Pass a username (of your choice) to UserOutput via props and display it there
// 5. Add state to the App component (=> the username) and pass the username to the UserOutput components
// 6. Add a method to mainpulate the state (=> an event-handler method)
// 7. Pass the event-handler method reference to the UserInput component and bind it to the input-chang event
// 8. Ensure the new input entered by the user overwrites the lid username passed to UserOutput
// 9. Add two-way-binding to your input (in UserInput) to also display the starting username
// 10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

class App extends Component {
  render() {
    return (
      <div className="App">
            <h1><u>First React Practice Assignment Instructions:</u></h1>
          <ol>
            <li>create two new components: UserInput and UserOutput</li>
            <li>UserInput should hlid an input element, UserOutput two paragrpahs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput components</li>
            <li>Add a method to mainpulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-chang event</li>
            <li>Ensure the new input entered by the user overwrites the lid username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>

          <p>Note: Outputs/generates component UserInput with self closing tag</p>
          <UserInput />

          <p>Note: Outputs/generates component UserOutput three times with self closing tag</p>
          <UserOutput />
          <UserOutput />
          <UserOutput />

      </div>
    );
  }
}

export default App;
