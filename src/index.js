import React from 'react';
import ReactDOM from 'react-dom';
import {App, Sub} from './components/App';

ReactDOM.render(<div>
<App />
<App />
<App />
</div>  , document.getElementById('app'));

ReactDOM.render(<Sub />, document.getElementById('sub'));