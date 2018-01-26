import _ from 'lodash'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'

const API_KEY = 'AIzaSyBElZ4tavXF9UkH0BslAhFlA-sF8JxuXFs'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {videos: [], selectedVideo: null}
		this.searchYoutube('derekbanas')
	}

	searchYoutube(term) {
		YoutubeSearch({key: API_KEY, term: term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		var debouncedSearchFunction = _.debounce(term => {this.searchYoutube(term)}, 1000)
		return (
			<div>
				<SearchBar onSearchTermChange={debouncedSearchFunction} />
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos}  onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
			</div>
			);
	}
}


// add the component in a DOM
ReactDOM.render(<App />, document.querySelector(".container"));