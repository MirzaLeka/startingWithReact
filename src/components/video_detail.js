import React from 'react';

const VideoDetail = ({video}) => {

    
// avoids undefined error that occurs if react renders components before API request finishes
if (!video) {
    return <div>Loading...</div>;
    }

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}`;

return  (

<div className="video-detail col-md-8">

<div className="embed-responsive embed-responsive-16by9">

<iframe src={url} className="embed-responsive-item"></iframe>

</div>

<div dlassName="details">

<div>{video.snippet.title}</div>
<div>{video.snippet.description}</div>

</div>

</div>

);

};

export default VideoDetail;