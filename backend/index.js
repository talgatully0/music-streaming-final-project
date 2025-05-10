const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const trackSchema = new mongoose.Schema({
    title: String,
    artist: String,
});

const Track = mongoose.model('Track', trackSchema);

app.get('/tracks', async (req, res) => {
    const tracks = await Track.find();
    res.json(tracks);
});

app.post('/tracks', async (req, res) => {
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});