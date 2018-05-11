
import React, { Component } from 'react'; // import React and pull off Component as variable Component

// every class component must have render function
// because we chose this component too communicate with other components (in this case it will search through videos),
// we changed it from functional component to class based component

class SearchBar extends Component { // instaed of React.Component
  render() { // we don't need to type render() function because we use ES6
    return ( 
<input type="text" onChange={this.onInputChange} /> // whenever we write JS code in JSX we put it inside { }
// we can do this without this.nameOfFunction and create an anonymous function inside { }
    );
  }

// events that will trigger on input
onInputChange (event) {
  console.log("Value of the input is: " + event.target.value);
  // event = object, target = object method, value = value of the method / value of input
}

}

export default SearchBar;

/* OLD CODE -> Returns and makes JSX. It's not aware of it's surroundings or it's state.
import React from 'react';

// functional component
const SearchBar = () => {
return <input />;
}

export default SearchBar;
*/

