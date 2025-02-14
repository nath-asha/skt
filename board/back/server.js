require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const data = require('../end/public/scores.json');
console.log(data);

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// const participantSchema = new mongoose.Schema({
//     name: String,
//     score: Number,
//     git: String
// });

// const Participant = mongoose.model('Participant', participantSchema);

app.get('/participants', async (req, res) => {
    const participants = await Participant.find().sort({ score: -1 });
    res.json(participants);
});


app.post('/participants', async (req, res) => {
    const { name, score, git } = req.body;
    const newParticipant = new Participant({ name, score, git });
    await newParticipant.save();
    res.status(201).json(newParticipant);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
