import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedVideoList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return <div className="ui list">{renderedVideoList}</div>;
};

export default VideoList;
