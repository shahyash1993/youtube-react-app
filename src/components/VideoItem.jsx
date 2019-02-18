import React from "react";

import "./css/VideoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.description}
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
