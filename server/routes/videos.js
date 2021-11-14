// const { response } = require('express');
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// const images = (request, response) => {
//   const videoData = fs.readFileSync("./data/videosdetails.json");
//   const parsedVideoData = json.parse(videoData);
//   return parsedVideoData;
// };

/**
 * Get all videos
 */
router.get("/videos", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      response.json(JSON.parse(data));
    }
  });
});

/**
 * Get single video by id
 */
router.get("/videos/:id", (request, response) => {
  console.log(request.params.id);
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    }

    const videoData = JSON.parse(data);
    const foundVideo = videoData.find((video) => video.id == request.params.id);
    if (!foundVideo) {
      response.json({ message: "error getting video data" });
    } else {
      response.json(foundVideo);
    }
  });
});

router.post("/videos", (request, response) => {
  console.log("posting upload");
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      console.log("attempting to write file");
      // response.json(JSON.parse(data));
      const title = request.body.title;
      const description = request.body.description;
      let vidData = JSON.parse(data);
      vidData.push({
        id: uuidv4(),
        title: `${title}`,
        channel: "Alpha",
        image:"http://localhost:8080/images/uploadVideoPreview.jpg",
        description: `${description}`,
        views: "67,567",
        likes: "75,985",
        duration: "4:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1632344461000,
        comments: []
      });

      fs.writeFileSync("./data/videosdetails.json", JSON.stringify(vidData)),
        console.log(request.body.title);
      response.send("file written successfully");
    }
  });
});

module.exports = router;
