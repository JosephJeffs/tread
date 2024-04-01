import { useState, useEffect } from 'react'

import './App.css'


const workouts = [
  {
    "name": "First Try",
    "summary": "In this workout you will test the app",
    "phases": [
      {
        "name": "Warmup",
        "intervals": [
          {
            "pace": "Performance Pace",
            "incline": 3,
            "duration": 180
          }
        ]
      }
    ]
  }
]

function App() {

  const [timer, setTimer] = useState(0);
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);
  const [running, setRunning] = useState(false);



  useEffect(() => {
    const timer = setTimeout(() => {
      if (running){
         setTimer((oldVal) => (oldVal + 1));
      }
     
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <h1>{selectedWorkout.name}</h1>
      {timer}
      <div className="card">
        <button onClick={() => setRunning(true)}>
          Start
        </button>
        <button onClick={() => setRunning(false)}>
          Pause
        </button>
        <button onClick={() => setTimer(0)}>
          Reset
        </button>
      </div>

    </>
  )
}

export default App
