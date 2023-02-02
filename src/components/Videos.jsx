import React from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, justifyContent, direction }) => {
  if (!videos?.length)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="error" />
      </div>
    );

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", md: justifyContent }}
      gap={{ md: 3, xs: 2 }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
