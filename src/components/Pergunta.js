import { useState } from 'react'
import setaPlay from '../assets/img/seta_play.png'
import setaVirar from '../assets/img/seta_virar.png'
import styled from 'styled-components'
import iconeErro from '../assets/img/icone_erro.png'
import iconeCerto from '../assets/img/icone_certo.png'
import iconeQuase from '../assets/img/icone_quase.png'

export default function Pergunta({ question, answer, cont, respondidas, setRespondidas }) {
  const [abertas, setAbertas] = useState([])
  const [respostas, setRespostas] = useState([])
  
  const [cor, setCor] = useState('#333')
  const [icone, setIcone] = useState(setaPlay)
  const [test, setTest] = useState("play-btn")

  function mostrarPergunta(pergunta) {
    let aux = []
    aux.push(pergunta)
    setAbertas(aux)
  }

  function mostrarResposta(pergunta) {
    let aux = []
    aux.push(pergunta)
    setRespostas(aux)
  }

  function responder(cor, question, icone) {
    let aux = abertas.filter(elm => elm != elm)
    setAbertas(aux)
    aux = [...respondidas, question]
    setCor(cor)
    setRespondidas(aux)
    setIcone(icone)
    switch(icone){
      case iconeCerto:
        setTest("zap-icon")
        break

      case iconeErro:
        setTest("no-icon")
        break
      
      case iconeQuase:
        setTest("partial-icon")
        break
    }
  }

  return (
    <>{(!abertas.includes(question)) ?
      <PerguntaFechada cor={cor}>
        <p data-test="flashcard-text" >{`Pergunta ${cont}`}</p>
        <button disabled={(respondidas.includes(question)) ? true : false}>
          <img data-test={test} onClick={() => mostrarPergunta(question)} src={icone} />
        </button>
      </PerguntaFechada> :

      <PerguntaAberta >
        <p data-test="flashcard-text" >{(respostas.includes(question)) ? answer : question}</p>
        {(respostas.includes(question)) ?
          <ContainerBotoes>
            <button data-test="no-btn" onClick={() => responder('#FF3030', question, iconeErro)}>Não lembrei</button>
            <button data-test="partial-btn" onClick={() => responder('#FF922E', question, iconeQuase)}>Quase lembrei</button>
            <button data-test="zap-btn" onClick={() => responder('#2FBE34', question, iconeCerto)}>Zap!</button>
          </ContainerBotoes> :
          <img data-test="turn-btn" onClick={() => mostrarResposta(question)} src={setaVirar} />
        }
      </PerguntaAberta>
    }
    </>
  )
}

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: ${props => (props.cor != '#333' ? 'line-through' : 'none')};
  color: ${props => props.cor};
  }

  > button {
    background-color: transparent;
    border: none;
  }
`
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1px;

  > button{
    width: 86px;
    height: 37px;

    color: #FFFFFF;
    font-family: 'Recursive';

    border-radius: 5px;
    border:none;
  }

  > :nth-child(1){
    background-color: #FF3030;
  }
  > :nth-child(2){
    background-color: #FF922E;
  }
  > :nth-child(3){
    background-color: #2FBE34;
  }
`