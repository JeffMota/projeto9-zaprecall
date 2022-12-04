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
    <ScreenContainer>
      <LogoContainer />
      {cards.map(card => {
        cont++
        return < Pergunta data-test="flashcard" respondidas={respondidas} setRespondidas={setRespondidas} key={cont} cont = { cont } question = { card.question } answer = { card.answer } />
      })}
      <FooterConcluidos quantTotal={cont} quantResp={respondidas.length}/>
    </ScreenContainer>
  );
}

export default App;


const ScreenContainer = styled.div`

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