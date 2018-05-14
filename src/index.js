const _ = require('lodash');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {App, Sub} from './components/App';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyAyKU6wP8ZmOhzugkW3ocRssocX8YQ9Qco";

    class AppIndex extends Component  {
        constructor (props) {
            super(props);

            this.state = { 
                videos: [],
            selectedVideo: null
         };

         this.videoSearch('fireplace'); //setting default value for term == default search when page loads
            }

            videoSearch(term) {
               
                YTSearch({
                    key: API_KEY,
                    term: term}, (videos) => { // What we type in term will be result of our youtube search
                    this.setState({
                    videos : videos,
                    selectedVideo: videos[0] }); 
                    }
                    );
    
    }
    
            
        render() {

            // Prevents search to be executed onchange, but rather after 500 seconds, so screen won't refresh 10 times a second
            const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

            return (
                <div>
                <SearchBar onSearchTermChange= {term => this.videoSearch(term)} /> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect = {selectedVideo => this.setState({selectedVideo})}/>
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