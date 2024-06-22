import './App.css';
import  {useState} from 'react';
import MainMenu from './components/MainMenu';
import { QuizContext } from './Helpers/QuizContext';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';



export default function App() {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore]=useState(0); 
  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider value={{ gameState, setGameState, score, setScore}}>
          {gameState === "menu" && <MainMenu />}
          {gameState==="quiz" && <Quiz/>} 
          {gameState==="endScreen" && <EndScreen/>}
        </QuizContext.Provider>
      </div>
    </>
  );
}

