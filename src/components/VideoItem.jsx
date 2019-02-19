import React from "react";

import "./css/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />

      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
