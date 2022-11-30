import logo from '../assets/img/logo.png'

export default function LogoContainer(){
    return(
        <div className="logo-container">
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </div>
    )
}