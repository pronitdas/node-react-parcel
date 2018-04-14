import React from "react"
import ReactDOM from "react-dom"
import Header from './components/header'
import './scss/app.scss'
import Login from './components/login'
import Game from './components/game'


class Squats extends React.Component {
    render() {
        return <React.Fragment>
            <Header/>
            {true ? <Game></Game> : <Login {...this.props}/>}
                
            </React.Fragment>
    }
}

let App = document.getElementById("app")

ReactDOM.render(<Squats name="Pronit" />, App)