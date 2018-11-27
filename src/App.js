import React, { Component } from 'react';

import Etape1 from './Components/Etape1/Etape1'
import Etape2 from './Components/Etape2/Etape2'
import Etape3 from './Components/Etape3/Etape3'

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

  handleChangeCivilite = (civiliteSaisie) => {
    this.setState({
      civilite: civiliteSaisie
    })
  }

  handleChangeLastName = (nameSaisie) => {
    this.setState({
      nom: nameSaisie
    })
  }

  handleChangeFirstName = (nameSaisie) => {
    this.setState({
      prenom: nameSaisie
    })
  }

  handleChangeEmail = (emailSaisie) => {
    this.setState({
      email: emailSaisie
    })
  }

  handleChangeNumeroTelephone = (telephoneSaisie) => {
    this.setState({
      tel: telephoneSaisie
    })
  }

  handleValidateFormStep1 = (response) => {
    this.setState({
      etape1: response,
      etape2: true
    })
  }

  handleValidateFormStep2 = (response) => {
    this.setState({
      etape2: response,
      etape3: true
    })
  }

  handleChangeFramework = (frameworkSaisie) => {
    this.setState({
      framework: frameworkSaisie
    })
  }

  handleBackToStep1 = (stateStep1) => {
    this.setState({
      etape1: stateStep1,
      etape2: false
    })
  }

  handleBackToStep2 = (stateStep2) => {
    this.setState({
      etape2: stateStep2,
      etape3: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Formulaire</h1>

        { this.state.etape1 
          ? 
            <Etape1
              getCivilite={this.handleChangeCivilite} 
              getFirstName={this.handleChangeFirstName} 
              getLastName={this.handleChangeLastName} 
              getEmail={this.handleChangeEmail} 
              getNumeroTelephone={this.handleChangeNumeroTelephone}
              validateForm={this.handleValidateFormStep1}
            />
          :
            null
        }

        {
          this.state.etape2 
          ?
            <Etape2 getFramework={this.handleChangeFramework} validateForm={this.handleValidateFormStep2} backForm={this.handleBackToStep1}/>
          :
            null
        }

        {
          this.state.etape3
          ?
            <Etape3 
              backForm={this.handleBackToStep2}
              civilite={this.state.civilite}
              nom={this.state.nom}
              prenom={this.state.prenom}
              email={this.state.email}
              tel={this.state.tel}
              framework={this.state.framework}
            />
          :
            null
        }
      </div>
    );
  }
}

export default App;
