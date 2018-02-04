import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addNote = (event) => {
      event.preventDefault()
      console.log('nappia painettu')
      const personObject = {
          name : this.state.newName
      }

     this.state.persons.forEach((person) => {
        if (person.name === personObject.name) {
            return alert('Nimi on jo luettelossa'); 
        } else {
            const persons = this.state.persons.concat(personObject) 
            this.setState({
       
              persons,
              newName: ''
            })
        }
                  
     })
    
    
   
    
  }



  handlePersonsChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handlePersonsChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
            {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
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