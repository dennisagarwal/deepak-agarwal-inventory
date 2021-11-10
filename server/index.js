//common JS import syntax
const express = require('express');
const app= express();
const PORT = 9001;
const cors = require('cors');
const axios = require("axios");
const fs = require("fs"); //node-file system module

const PORT= 9001;
//8080, 4200, 5000 are usually common port numbers people use for servers
app.listen(PORT,function(){
  //dont use 23 or 80
  //if u r using react avoid 3000
  console.log("my server is running")
})

//ES module syntax
//import axios from "axios";

axios.get(`https://project-2-api.herokuapp.com`).then((response) => {
  fs.writeFile(`./videos`, JSON.stringify(response.data), (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("file return successfully");
  });
})
.catch((error)=>{
  console.log(error);
});
