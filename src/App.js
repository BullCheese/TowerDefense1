import './App.css';
import MainMenu from './component/Menu.js';
import Game from './component/Game';
import GameTitle from './component/GameTitle';

function App() {
  return (
    <div className="App">
      <GameTitle></GameTitle>
      <Game></Game>
      <MainMenu></MainMenu>
    </div>
  );
}

export default App;
