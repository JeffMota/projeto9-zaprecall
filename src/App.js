import LogoContainer from './components/LogoContainer';
import Pergunta from './components/Pergunta';
import cards from './Cards'
import FooterConcluidos from './components/FooterConcluidos';
import { useState } from 'react';
import styled from 'styled-components';


function App() {
  let cont = 0
  const [respondidas, setRespondidas] = useState([])

  return (
    <div className="screen-container">
      <LogoContainer />
      {cards.map(card => {
        cont++
        return < Pergunta respondidas={respondidas} setRespondidas={setRespondidas} key={cont} cont = { cont } question = { card.question } answer = { card.answer } />
      })}
      <FooterConcluidos quantTotal={cont} quantResp={respondidas.length}/>
    </div>
  );
}

export default App;


const ScreenContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&family=Righteous&display=swap');

    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`