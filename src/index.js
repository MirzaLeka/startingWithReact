import React from 'react';
import ReactDOM from 'react-dom';
import {App, Sub} from './components/App';
//import searchBar from "./components/search_bar";
//ReactDOM.render(<searchBar/>, document.getElementById("searchbar"));
import SearchBar from './components/search_bar';

// Renders one component (searchbar) inside another
const Inp = () => {
    return (
    <div>
    <SearchBar /> {/* instance of a class SearchBar */}
    </div>
       );
    }

ReactDOM.render(<Inp/>, document.getElementById("searchbar"));

ReactDOM.render(<div>
<App />
<App />
<App />
</div>  , document.getElementById('app'));

ReactDOM.render(<Sub />, document.querySelector('.sub'));
