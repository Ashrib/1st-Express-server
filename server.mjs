console.log("hi I'm server file");

import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    console.log("request from ip:", req.ip);
  res.send("Asharib's server !!\nThanks for giving your ip address, your machine will be hacked soon.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})