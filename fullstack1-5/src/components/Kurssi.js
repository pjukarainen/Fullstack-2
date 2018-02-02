import React from 'react'

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
    <p>yhteensä {yhteensa.reduce((summa, tehtava) => summa + tehtava.tehtavia, 0)} tehtävää</p>
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

    export default Kurssi