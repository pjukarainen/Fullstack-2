import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''

    }
  }

componentDidMount() {
  axios
  .get('http://localhost:3001/persons')
  .then(response => {
    this.setState({ persons: response.data})
  })
}

  addNote = (event) => {
      event.preventDefault()
      console.log('nappia painettu')
      const personObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }

   let y = false
      this.state.persons.forEach((person) => {
        if (person.name === personObject.name) {
            y = true
            return alert('Nimi on jo luettelossa'); 
            
        }              
     })
    

     if (y === false) {
     const persons = this.state.persons.concat(personObject) 
     this.setState({

       persons,
       newName: '',
       newNumber: ''
     })
    }
     
  }


  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value})
  }

  handleNumberChange = (event) => {
      console.log(event.target.value)
      this.setState({ newNumber: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNameChange}
            />
          </div>
          <div>
             numero: <input
             value={this.state.newNumber}
             onChange={this.handleNumberChange}
             />
        </div>

          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
            {this.state.persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
            </ul>
      </div>
    )
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

  export default App