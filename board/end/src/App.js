import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Leaderboard from './page/Leaderboard';
import './App.css';

function App() {
  const [participants, setParticipants] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [score, setscore] = useState('');
  const [git, setgit] = useState('');
  // const [badge, setbadge] = useState('');

  const addParticipant = (name, score) => {
      const newParticipant = {
          name: name,
          score: score,
          git: git
          // rank : rank,
          // badge : badge
      };
      setParticipants([...participants, newParticipant]);
  };

  const updateLeaderboard = () => {
      const sortedParticipants = [...participants].sort(
          (a, b) => b.score - a.score);
      setLeaderboardData(sortedParticipants);
  };

  return (
      <div className="App">
          <div className="container">
              <h1 className="title"> score </h1>
              <div className="steps-container">
              </div>
              <ParticipantForm addParticipant={addParticipant}
                  updateLeaderboard={updateLeaderboard} />
              <Leaderboard leaderboardData={leaderboardData} />
          </div>
      </div>
  );
}

function ParticipantForm({ addParticipant,
  updateLeaderboard }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [git, setgit] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      addParticipant(name, score);
      updateLeaderboard();
      setName('');
      setScore('');
      setgit('');
  };

  return (
      <form onSubmit={handleSubmit} className="participant-form">
          <input type="text" placeholder="Participant Name"
              value={name} onChange={
                  (e) => setName(e.target.value)} required />
          <input type="number" placeholder="Score"
              value={score} onChange={
                  (e) => setScore(e.target.value)} required />
          <input type="text" placeholder="Github link"
              value={git} onChange={
                  (e) => setgit(e.target.value)} required />
          <button type="submit">
              Add Participant
          </button>
      </form>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
               
//       </header>
//     </div>
//   );
// }
// export default App;
