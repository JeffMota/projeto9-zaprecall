import setaPlay from '../assets/img/seta_play.png'
import setaVirar from '../assets/img/seta_virar.png'

export default function Pergunta({ question, answer, mostrarPergunta, fechada }) {
    return (
        <>
            <div className={`pergunta-fechada ${(fechada) ? '': 'hidden'}`}>
                <p>{(fechada) ? 'Pergunta':question}</p>
                <img onClick={mostrarPergunta} src={setaPlay} />
            </div>
            <div className={`pergunta-aberta ${(!fechada) ? '': 'hidden'}`}>
                <p>{answer}</p>
                <img src={setaVirar} />
            </div>
        </>
    )
}
