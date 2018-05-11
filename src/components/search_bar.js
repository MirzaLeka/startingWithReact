
import React, { Component } from 'react'; // import React and pull off Component as variable Component

// every class component must have render function
// because we chose this component too communicate with other components (in this case it will search through videos),
// we changed it from functional component to class based component

class SearchBar extends Component { // instaed of React.Component


// constructor is called whenever we create an instance of a class (object)
// We initialize the state of component with constructor and setting the state with this.state
constructor (props) {
  super(props); //calls the parent constructor
  
  // Instance of a state. This will be updated every time event triggers
  this.state = { term: '' }; // object with prop term
  
  }
  

  render() { // we don't need to type render() function because we use ES6

  return (
    <input
     value={this.state.term} // With this our component becomes a controlled component with it's value change every time the state changes
     onChange={(event) => this.setState({ //this.setState causes the component to re-render & then value of the input is set to a value we entered
      term: event.target.value // setting the state by putting it into object and changing value of a property term 
    }) } />
  )

  // this.state.term = value of the input. No need to use Jquery
  // 1) we start typing, 2) trigger on change, 3) state refreshes, value gets this.state.term = value of the input

}

}

export default SearchBar;


 /*   return ( 
<input type="text" onChange={this.onInputChange} /> // whenever we write JS code in JSX we put it inside { }
// we can do this without this.nameOfFunction and create an anonymous function inside { }
    );*/
 
// events that will trigger on input

/* No Longer Used

onInputChange (event) {
  console.log("Value of the input is: " + event.target.value);
  // event = object, target = object method, value = value of the method / value of input
}
*/






// States are used to record and react to user events
// Class components have a state, but not functional
// Every time state changes component and it's children re-render

/* OLD CODE -> Returns and makes JSX. It's not aware of it's surroundings or it's state.
import React from 'react';

// functional component
const SearchBar = () => {
return <input />;
}

export default SearchBar;
*/

