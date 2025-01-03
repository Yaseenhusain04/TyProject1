import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewsComp from "./NewsComp";
import { Axios } from "axios";
import NewsImageComp from "./NewsImageComp";
import VideosComp from "./VideosComp";
import PhotosComp from "./PhotosComp";
import { LineAxisOutlined } from "@mui/icons-material";

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c231889/i.jpg',
  headers: {
    'X-RapidAPI-Key': '5b6f5926abmshc664194184294b8p154f5djsn5c83052c2564',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


const HomeContent = () => {
  const [news, setNews] = useState([]);
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getNewsImage();
    getNews();
    getVideos()
    getPhotos()
  }, []);

  const getNewsImage = () => {
   axios
      .get("https://cricbuzz-server.herokuapp.com/news")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPhotos = () => {
    axios
      .get("https://cricbuzz-server.herokuapp.com/photos")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getVideos = () => {
    axios
      .get("https://cricbuzz-server.herokuapp.com/videos")
      .then((res) => {
        console.log(res.data);
        setVideoData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNews = () => {
    axios
      .get("https://cricbuzz-cricket.p.rapidapi.com/news/v1/index", {headers: {

              'X-RapidAPI-Key': '8fee5891e9mshc198b1f3322bf3ep11bec2jsn8e38bf1ae3d8',
              'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }})
      .then((res) => {
        console.log(res.data);
        setNews(res.data.storyList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        mt={"0.3rem"}
        border="1px solid"
        display={"flex"}
        justifyContent="space-between"
        gap={"0.3rem"}
      >
        <Box w="196px"    
        border="1px solid"
        >
          <Box h={"fit-content"} bg="#fff" p={2}>
          <var Text as="b" mb={2} fontSize={"lg"} color={"#009270"}>
            LATEST NEWS
          </var>
          {news &&
            news.map(
              (ele) =>
                ele.story && (
                  <NewsComp
                    key={ele.id}
                    title={ele.story.hline}
                    date={ele.story.pubTime}
                  />
                )
            )}
          </Box>
          <Box h={"fit-content"} mt="0.3rem" bg="#fff" p={2}>
          <var Text as="b" mb={2} fontSize={"lg"} color={"#009270"}>
            LATEST PHOTOS
          </var>
          {photos &&
            photos.map(
              (ele) =>
                 (
                  <PhotosComp
                    key={ele.id}
                    caption={ele.caption}
                    date={ele.dateTaken}
                    image={ele.url}
                  />
                )
            )}
          </Box>
        </Box>

        <Box w="470px" p={3} bg="#fff">
          {data &&
            data.map((ele) => (
              <NewsImageComp
                key={ele.scribId}
                image={ele.image.peerUrls.WIDE}
                title={ele.title}
                description={ele.image.longCaption}
                caption={ele.image.caption}
              />
            ))}
        </Box>

        <Box w="342px" h={"fit-content"} p={3}  bg="#fff">
          <var Text as="b" mb={2} fontSize={"lg"} color={"#009270"}>
            FEATURED VIDEOS
          </var>
          {
            videoData && videoData.map((ele)=>(

              <VideosComp
              key={ele.id}
              image={ele.imageUrl}
              title={ele.title}
              seoTitle={ele.seoTitle}
              date={ele.publishedAt}
              />
            ))
          }
           
        </Box>
      </Box>
    </>
  );
};

export default HomeContent;
