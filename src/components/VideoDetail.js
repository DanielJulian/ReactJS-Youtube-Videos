import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Run your search!</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title={`video player${video.id.videoId}`} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title} </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;