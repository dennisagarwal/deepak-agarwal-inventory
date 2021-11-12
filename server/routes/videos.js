// const { response } = require('express');
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const images = (request, response) => {
  const videoData = fs.readFileSync("./data/videosdetails.json");
  const parsedVideoData = json.parse(videoData);
  return parsedVideoData;
};

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

// router.post('/uploads',(request,response)=>{
//   // const video = request.body.video;

//   const title = request.body.title;
//   console.log( request.body.title)
//   const description = request.body.descripton;
//   videoData.push(title);
//   videoData.push(description);
//   response.statusMessage(201).send("video added to database");
//   })
// router.post('/uploads',(request,response)=>{
// const video = request.body.video;
// const title = request.body.title;
// fs.writeFile(
//   './data/videosdetails.json',
//   JSON.stringify(title)),()=>{
// fs.writeFile('./data/videosdetails.json', "hello",
// response.send("hello"))
// console.log( req.body.title)
// const title = request.body.title;
// response.send(

// console.log(title))
//   fs.writeFile(
//     './data/videosdetails.json',
//     console.log(request.body.title),
//     (error) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log("file return successfully");
//     }
//   );
// })
uploadsPage = [];
router.post("/uploads", (request, response) => {
  const title = request.body.title;
  const description = request.body.descripton;

  uploadsPage.push({ id: "uuidv4()", title, description, channel: "sbc" });
  console.log(request.body.title);
});

// const description = request.body.descripton;
// videoData.push(title);
// videoData.push(description);
// response.statusMessage(201).send("video added to database");
// })

module.exports = router;
