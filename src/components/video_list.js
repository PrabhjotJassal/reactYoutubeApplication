import React from 'react';

import VideoListItem from './video_list_item';


const VideoList = ({videos, onVideoSelect}) => {
	var videoItems = videos.map(video => {
		return (<VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />);
	});

	return (<div className="col-md-4 list-group">
				{videoItems}
			</div>)	
};


export default VideoList;