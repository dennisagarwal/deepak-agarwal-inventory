// const { response } = require('express');
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

/**
 * Get all videos
 */
// router.get("/videos", (request, response) => {
  router.get("/uploads", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      response.json(JSON.parse(data));
    }
  });
});

// router.post("/videos", (request, response) => {
  router.post("/uploads", (request, response) => {
  fs.readFile("./data/videosdetails.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.json({ message: "error getting video data" });
    } else {
      console.log("attempting to write file");
      // response.json(JSON.parse(data));
      const title = request.body.title;
      const description = request.body.description;
      const tag = request.body.tag;
      const rack = request.body.rack;
      const quantity = request.body.quantity;
      const location = request.body.location;
      let vidData = JSON.parse(data);
      vidData.push({
        id: uuidv4(),
        title: `${title}`,
        tag: `${tag}`,
        description: `${description}`,
        rack: `${rack}`,
        quantity: `${quantity}`,
        location: `${location}`,

      });

      fs.writeFileSync("./data/videosdetails.json", JSON.stringify(vidData)),
        console.log(request.body.title);
      response.send("file written successfully");
    }
  });
});

module.exports = router;
