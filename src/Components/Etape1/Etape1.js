import React, { Component } from 'react';

import './Etape1.css'

class Etape1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      isInputFill: true,
      isEmailCorrect: true
    }
  }

  checkEmail() {
    let expRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(expRegex.test(this.state.email))
    return expRegex.test(this.state.email);
  }

  handleChange = (e) => {
    this.setState({email: e.target.value});

    if ( e.target.name === "email" ) {
      if ( !this.checkEmail() ) {
        this.setState({ isEmailCorrect: false })
      } else {
        this.setState({ isEmailCorrect: true })
      }
    }

    this.props.getSaisieUser(e.target.name, e.target.value);
  }

  submitForm = (e) => {
    if ( this.props.inputsFill ) {
      this.props.validateForm('next', 'etape1');
    } else {
      e.preventDefault();
      this.setState({ isInputFill: this.props.inputsFill })
    }
  }

  render() {
    return (
      <div className="wrapper-etape-1">
        <h2>Étape 1 : Vos informations</h2>
        <form onSubmit={this.submitForm}>
          <div className="wrapper-input-select">
            <label>
              Civilité
              <select value={this.props.stateApp.civilite} name="civilite" onChange={this.handleChange}>
                <option value="Monsieur">Monsieur</option>
                <option value="Madame">Madame</option>
              </select>
            </label>
          </div>
          
          <div className="wrapper-input-text">
            <label>
              <input type="text" name="prenom" placeholder="Saisissez votre prénom..." value={this.props.stateApp.prenom} onChange={this.handleChange} />
            </label>

            <label>
              <input type="text" name="nom" placeholder="Saisissez votre nom..." value={this.props.stateApp.nom} onChange={this.handleChange} />
            </label>
          </div>

          <div className="wrapper-input-email-number">
            <label>
              <input type="email" name="email" placeholder="Saisissez votre email..." value={this.props.stateApp.email} onChange={this.handleChange} />
              { this.state.isEmailCorrect ? null : <p className="emailError">L'adresse mail n'est pas correct.</p> }
            </label>

            <label>
              <input type="number" name="telephone" placeholder="Saisissez votre n° de téléphone..." value={this.props.stateApp.tel} onChange={this.handleChange} />
            </label>
          </div>

          { this.state.isInputFill ? 
            null
          :
            <div className="wrapper-msg-error">
              <p>Tous les champs doivent être remplis.</p>
            </div>
          }

          <button type="submit" className="button button-next">Valider</button>
        </form>
      </div>
    );
  }
}
  
export default Etape1;
  