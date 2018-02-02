import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
  const osat = props.kurssi.osat;
  const rivit = () => osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
  return(
    <ul>
     {rivit()}
    </ul>
  )
}
const Yhteensa = (props) => {
  const yhteensa = props.kurssi.osat
  
  return(
    <p>yhteensä {yhteensa.reduce((summa, tehtava) => summa + tehtava.tehtavia,)} tehtävää</p>
  )
}

const Kurssi = (props) => {
    return(
    <div>
       <Otsikko kurssi={props.kurssi}/>
       <Sisalto kurssi={props.kurssi}/>
       <Yhteensa kurssi={props.kurssi}/>
       </div>
    )
    }


const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)