import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div></div>;
	}

	const url = `https://youtube.com/embed/${video.id.videoId}`;
	return (
		<div key={video.id.videoId}>
			<div className="ui embed">
				<iframe src={url} title={video.snippet.title} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video ? video.snippet.title : '---'}</h4>
				<p>{video ? video.snippet.description : '---'}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
