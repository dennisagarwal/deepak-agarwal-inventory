//common JS import syntax
const express = require('express');
const videoRoutes = require('./routes/videos')
// const uploadRoutes=require('./routes/upload')
require('dotenv').config();
const PORT=process.env.PORT||8080;
const app= express();
// const PORT = 9001;declaring the port
const cors = require('cors');
const axios = require("axios");
const fs = require("fs"); //node-file system module, save data to the file
// const uoload = require('path');

// function deleteRouteMiddleware(req, res, next) {
//   if (req.method === "DELETE") {
//       res.status(403).send("Deleting resources is not permitted in this API");
//   } else {
//       req.info = "Some info";
//       next();
//   }
// }


app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use('/', videoRoutes);
// app.use('/uploads', uploadRoutes);

app.listen(PORT,function(){
  //dont use 23 or 80
  //if u r using react avoid 3000
  console.log("my server is running "+ PORT)
})

// axios.get(`https://project-2-api.herokuapp.com/videos?api_key=db19a50e-b6fd-4717-9083-77b0d60253b5`).then((response) => {
//   // console.log(response.data);
//   //to create a file video, convert to stingify, if error console log the error
//   fs.writeFile(`./videos`, JSON.stringify(response.data), (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("file return successfully");
//   });
// })
// .catch((error)=>{
//   console.log(error);
// });

// let id="84e96018-4022-434e-80bf-000ce4cd12b8";
// axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=db19a50e-b6fd-4717-9083-77b0d60253b5`).then((response) => {
//   // console.log(response.data);
//   //to create a file video, convert to stingify, if error console log the error
//   //write to file using File System Module
//   fs.writeFile(`./${id}Id`, JSON.stringify(response.data), (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("file return successfully");
//   });
// })
// .catch((error)=>{
//   console.log(error);
// });