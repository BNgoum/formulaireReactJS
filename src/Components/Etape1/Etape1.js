import React, { Component } from 'react';

class Etape1 extends Component {

  handleChangeCivilite = (e) => {
    let civilite = e.target.value;
    this.props.getCivilite(civilite);
  }

  handleChangeFirstName = (e) => {
    let firstName = e.target.value;
    this.props.getFirstName(firstName);
  }

  handleChangeLastName = (e) => {
    let lastName = e.target.value;
    this.props.getLastName(lastName);
  }

  handleChangeEmail = (e) => {
    let email = e.target.value;
    this.props.getEmail(email);
  }

  handleChangeTelephone = (e) => {
    let telephone = e.target.value;
    this.props.getNumeroTelephone(telephone);
  }

  submitForm = () => {
    this.props.validateForm(false);
  }

  render() {
    return (
      <div className="wrapper-etape-1">
        <h2>Étape 1 : </h2>
        <div className="wrapper-input-select">
          <label>
            Civilité
            <select onChange={this.handleChangeCivilite}>
              <option value="Monsieur">Monsieur</option>
              <option value="Madame">Madame</option>
            </select>
          </label>
        </div>
        
        <div className="wrapper-input-text">
          <label>
            Prenom
            <input type="text" name="Prenom" onChange={this.handleChangeFirstName} />
          </label>

          <label>
            Nom
            <input type="text" name="Nom" onChange={this.handleChangeLastName} />
          </label>
        </div>

        <div className="wrapper-input-email">
          <label>
            Email
            <input type="email" name="email" onChange={this.handleChangeEmail} />
          </label>
        </div>

        <div className="wrapper-input-telephone">
          <label>
            Numéro de téléphone
            <input type="number" name="telephone" onChange={this.handleChangeTelephone} />
          </label>
        </div>

        <button className="button-next" onClick={this.submitForm}>Suivant</button>
      </div>
    );
  }
}
  
export default Etape1;
  