import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            height: "200px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-90px" />
      </Box>
      <Box display="flex" p="2px">
        <Box />
        <Videos videos={videos} justifyContent="center" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
