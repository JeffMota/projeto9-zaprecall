import LogoContainer from './components/LogoContainer';
import Pergunta from './components/Pergunta';
import cards from './Cards'

function App() {
  function mostrarPergunta(){
    alert('Mostrando pergunta')
  }

  return (
    <div className="screen-container">
      <LogoContainer />
      {cards.map(card => <Pergunta fechada={false} mostrarPergunta={mostrarPergunta} question={card.question} answer={card.answer}/>)}
    </div>
  );
}

export default App;
