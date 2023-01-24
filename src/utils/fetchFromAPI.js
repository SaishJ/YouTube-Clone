import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "d0b1df706cmshacd288108033d5dp1b671djsnafa3bd1b7cae",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// /baseUrl/getVideos
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
