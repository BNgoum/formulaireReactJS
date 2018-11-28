import React, { Component } from 'react';

import './Etape1.css'

class Etape1 extends Component {

  handleChange = (e) => {
    this.props.getSaisieUser(e.target.name, e.target.value);
  }

  submitForm = () => {
    this.props.validateForm('next', 'etape1');
  }

  render() {
    return (
      <div className="wrapper-etape-1">
        <h2>Étape 1 : Vos informations</h2>
        <form onSubmit={this.submitForm}>
          <div className="wrapper-input-select">
            <label>
              Civilité
              <select name="civilite" onChange={this.handleChange}>
                <option value="Monsieur">Monsieur</option>
                <option value="Madame">Madame</option>
              </select>
            </label>
          </div>
          
          <div className="wrapper-input-text">
            <label>
              <input type="text" name="prenom" placeholder="Saisissez votre prénom..." onChange={this.handleChange} />
            </label>

            <label>
              <input type="text" name="nom" placeholder="Saisissez votre nom..." onChange={this.handleChange} />
            </label>
          </div>

          <div className="wrapper-input-email-number">
            <label>
              <input type="email" name="email" placeholder="Saisissez votre email..." onChange={this.handleChange} />
            </label>

            <label>
              <input type="number" name="telephone" placeholder="Saisissez votre n° de téléphone..." onChange={this.handleChange} />
            </label>
          </div>

          <button type="submit" className="button button-next">Valider</button>
        </form>
      </div>
    );
  }
}
  
export default Etape1;
  