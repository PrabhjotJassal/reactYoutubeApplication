import React from 'react';

const VideoListItem = function({video, onVideoSelect}) {
	const imageUrl = video.snippet.thumbnails.default.url

	return (
		<li onClick={onVideoSelect.bind(this, video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left video-item">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem;