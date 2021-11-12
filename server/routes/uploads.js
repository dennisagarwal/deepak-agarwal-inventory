const express= require('express');
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// router.post('/uploads',(request,response)=>{
//   // const video = request.body.video;

//   const title = request.body.title;
//   console.log( request.body.title)
//   const description = request.body.descripton;
//   videoData.push(title);
//   videoData.push(description);
//   response.statusMessage(201).send("video added to database");
  // })
  // uploadsPage=[]
  // router.route("/").post((require,response)=>{
  //   const title = request.body.title;
  //   const description = request.body.descripton;

  //   uploadsPage.push({  id: uuidv4(),
  //     title,
  //     description,
  //     channel:"sbc"
  // })
  // })

  // module.exports = router;