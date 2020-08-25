import React, { Component } from 'react';
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
// 7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// 8. Ensure the new input entered by the user overwrites the lid username passed to UserOutput
// 9. Add two-way-binding to your input (in UserInput) to also display the starting username
// 10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

// *** LAST LEFT ON TIME STAMP 8:29, #5 ****

// App is a normal react component, but since it the extends the Compontent object provided by react is it a mine container
class App extends Component {
//state is just a propert of your class and a JavaScript objects
// Add state to the App component (=> the username) and pass the username to the UserOutput components
  state = {
    username: 'Super Stephen'
  }

// Add a method (an event listener method) to mainpulate the state (=> an event-handler method). Will update/overwrite state above.
usernameChangeHandler = (event) => {
  this.setState({
    // event.target.value
      // event.taget refers to the element the event occured on
      // value is a valued property we may access, since we know event target will be an input which has a value property which contains the value the user entered.
    // Ensure the new input entered by the user overwrites the lid username passed to UserOutput
    username: event.target.value
  });
}

// render is also a method, but uses a different syntax
  render() {
    return (
      <div className="App">
            <h1 className="App-header"><u>First React Practice Assignment Instructions:</u></h1>
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
          <p>Pasd a property named 'changed' and add usernameChangeHandler </p>
          <p>Add two-way-binding to your input (in UserInput) to also display the starting username</p>
          <UserInput
            changed={this.usernameChangeHandler}
            currentName={this.state.username}/>

          <p>Note: Outputs/generates component UserOutput three times with self closing tag</p>
          <p>Pass a username property (of your choice) to UserOutput via props and display it there.<br/>Currently, passing userName Stephen, Bob and Jesus.</p>

          <p>Passing dynamtic content to prop</p>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName={this.state.username}/>

          <p>Hardcoded UserOutput content:</p>
          <UserOutput userName="Jesus"/>

      </div>
    );
  }
}

export default App;
