import React, { Component } from 'react';
import './Etape2.css';

class Etape2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      framework: "",
    }
  }

  handleChange = (e) => {
    this.props.getSaisieUser(e.target.name, e.target.value)
    this.setState({framework: e.target.value})
  }

  submitForm = () => {
    this.props.validateForm('next', 'etape2');
  }

  backForm = () => {
    this.props.backForm('back', 'etape2');
  }

  render() {
    return (
      <div className="wrapper-etape-2">
      <h2>Étape 2 : Framework favoris</h2>
      <form onSubmit={this.submitForm}>
      <div className="wrapper-input-radio">
          <label>
            AngularJS
            <input type="radio" name="AngularJS" value="AngularJS" checked={this.state.framework === "AngularJS"} onChange={this.handleChange} />
          </label>

          <label>
            VueJS
            <input type="radio" name="VueJS" value="VueJS" checked={this.state.framework === "VueJS"} onChange={this.handleChange} />
          </label>

          <label>
            Symfony
            <input type="radio" name="Symfony" value="Symfony" checked={this.state.framework === "Symfony"} onChange={this.handleChange} />
          </label>
        </div>

        <div className="wrapper-textarea">
          <label>
            Autre :
            <textarea name="autre" onChange={this.handleChange} />
          </label>
        </div>
        
        <button className="button button-back" onClick={this.backForm}>Retour</button>
        <button className="button button-next">Suivant</button>
      </form>
      </div>
    );
  }
}
  
export default Etape2;
  