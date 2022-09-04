const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const SongController = require('./routes/song-route')
const ArtstController = require('./routes/artist-route')

app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())

app.listen(process.env.PORT || 5000,()=>{
    console.log('Listening on port 5000')
})


let db="mongodb+srv://sewanik:sewanik@spotify.z7oxwt4.mongodb.net/SpotifyAltas?retryWrites=true&w=majority"
mongoose.connect(db,()=>{
    console.log("database connected")
})

app.get("/",(req,res)=>{
    res.send("welcome to spotify back-end server")
})

app.use("/song",SongController);
app.use("/artist",ArtstController);


// module.exports = app;