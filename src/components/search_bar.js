
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
  

  render() { 

  return (
  <div className="search-bar">
  <input
     value={this.state.term} 
     onChange = {event => this.onInputChange(event.target.value)} />
    </div>
  )

}

onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
  
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

