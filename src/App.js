import LogoContainer from './components/LogoContainer';
import Pergunta from './components/Pergunta';
import cards from './Cards'


function App() {
  let cont = 0

  return (
    <div className="screen-container">
      <LogoContainer />
      {cards.map(card => {
        cont++
        return < Pergunta key={cont} cont = { cont } question = { card.question } answer = { card.answer } />
    })}
    </div>
  );
}

export default App;
