import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoChannelTitle,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          sx={{ width: 360, height: 180, background: "gray" }}
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "70px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 50) || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "14px", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
