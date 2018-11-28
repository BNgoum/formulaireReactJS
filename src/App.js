import React, { Component } from 'react';

import Etape1 from './Components/Etape1/Etape1'
import Etape2 from './Components/Etape2/Etape2'
import Etape3 from './Components/Etape3/Etape3'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etape1: true,
      etape2: false,
      civilite: "Monsieur",
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      framework: ""
    }
  }

  handleSaisie = (key, value) => {
    switch (key) {
      case 'civilite':
      this.setState({ civilite: value })
      break;
      case 'prenom':
      this.setState({ prenom: value })
      break;
      case 'nom':
      this.setState({ nom: value })
      break;
      case 'email':
      this.setState({ email: value })
      break;
      case 'telephone':
      this.setState({ tel: value })
      break;
      case 'AngularJS':
      this.setState({ framework: value })
      break;
      case 'VueJS':
      this.setState({ framework: value })
      break;
      case 'Symfony':
      this.setState({ framework: value })
      break;
      case 'autre':
      this.setState({ framework: value })
      break;
      default:
        console.log('La saisie ne correspond à aucun champs.')
    }
  }

  handleNavigate = (type, step) => {
    if ( type === "next") {
      if ( step === "etape1") { this.setState({etape1: false, etape2: true}) }
      else { this.setState({etape2: false, etape3: true}) }
    }
    else {
      if ( step === "etape2") { this.setState({etape1: true, etape2: false}) }
      else { this.setState({etape2: true, etape3: false}) }
    }
  }
  
  handleCancelForm = (stateStep3) => {
    this.setState({
      etape3: stateStep3,
      etape1: true,
      civilite: "Monsieur",
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      framework: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Formulaire</h1>

        { this.state.etape1 
          ? 
            <Etape1
              getSaisieUser={this.handleSaisie} 
              validateForm={this.handleNavigate}
            />
          :
            null
        }

        {
          this.state.etape2 
          ?
            <Etape2 
              getSaisieUser={this.handleSaisie} 
              validateForm={this.handleNavigate}
              backForm={this.handleNavigate}
            />
          :
            null
        }

        {
          this.state.etape3
          ?
            <Etape3 
              backForm={this.handleNavigate}
              civilite={this.state.civilite}
              nom={this.state.nom}
              prenom={this.state.prenom}
              email={this.state.email}
              tel={this.state.tel}
              framework={this.state.framework}
              cancelForm={this.handleCancelForm}
            />
          :
            null
        }
      </div>
    );
  }
}

export default App;