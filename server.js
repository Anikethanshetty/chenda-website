const express = require("express");
const fs = require("fs");
const app = express();

const web = fs.readFileSync(`${__dirname}/index1.html`);


app.get('/',(req,res)=>{
    res.send(web);
});

app.post("/adding new program",(req,res)=>{
      console.log("added new program")
});

app.listen(5050,()=>{
    console.log("server started on port 5050");
});

