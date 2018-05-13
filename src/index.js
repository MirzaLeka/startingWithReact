import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {App, Sub} from './components/App';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAyKU6wP8ZmOhzugkW3ocRssocX8YQ9Qco";

// In React our main component (in this case index.js) should be the only one responsible for AJAX and thus all other scripts will derive from it

    class AppIndex extends Component  {
        constructor (props) {
            super(props);

            this.state = { 
                videos: [],
            selectedVideo: null
         };

            // When component (page) loads, constructor will run right away and that will kick of the search
            // and then callback (videos) function will be called and it will update our state with the list of videos
            YTSearch({
                key: API_KEY,
                term: 'react js'}, (videos) => { // What we type in term will be result of our youtube search
                this.setState({
                videos : videos,
                selectedVideo: videos[0] }); 
                }
                );
            }
            
        render() {
            return (
                <div>
                <SearchBar /> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
                </div>
                )
        }

    } 

ReactDOM.render(<AppIndex/>, document.getElementById("searchbar"));

/*ReactDOM.render(<div>
<App />
<App />
<App />
</div>  , document.getElementById('app')); */

//ReactDOM.render(<Sub />, document.querySelector('.sub'));

// Renders one component (searchbar) inside another
// Functional components can render class components

//<SearchBar /> {/* instance of a class SearchBar */}

// We'll turn functional component Inp into class component because it will have multiple purposes like searching videos

//import searchBar from "./components/search_bar";
//ReactDOM.render(<searchBar/>, document.getElementById("searchbar"));