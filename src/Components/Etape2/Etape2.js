import React, { Component } from 'react';

class Etape2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      framework: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      framework: e.target.value
    })

    this.props.getFramework(e.target.value)
  }

  submitForm = () => {
    this.props.validateForm(false);
  }

  backForm = () => {
    this.props.backForm(true);
  }

  render() {
    return (
      <div className="wrapper-etape-1">
      <h2>Étape 2 : </h2>
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

        <div>
          <label>
            Autre :
            <textarea onChange={this.handleChange} />
          </label>
        </div>
        
        <button className="button-back" onClick={this.backForm} >Retour</button>
        <button className="button-next" onClick={this.submitForm} >Suivant</button>
      </div>
    );
  }
}
  
export default Etape2;
  