import React from 'react';
import ReactDOM from 'react-dom';
import {App, Sub} from './components/App';
import searchBar from "./components/search_bar";

ReactDOM.render(<searchBar/>, document.getElementById("searchbar"));

ReactDOM.render(<div>
<App />
<App />
<App />
</div>  , document.getElementById('app'));

ReactDOM.render(<Sub />, document.querySelector('.sub'));
