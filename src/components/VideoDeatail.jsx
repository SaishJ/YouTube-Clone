import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDeatail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box p="0 10px" position={{ md: "sticky" }} top={{ md: "78px" }}>
            <ReactPlayer
              className="react-player"
              width="100%"
              height="400px"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color="#fff" variant="subtitle1" p="6px 0">
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle2" color="gray">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "15px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="10px">
                <Typography variant="subtitle2" color="gray">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle2" color="gray">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box>
            <Videos videos={videos} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoDeatail;
