import React, { Component } from 'react';

class Etape3 extends Component {

    backForm = () => {
        this.props.backForm('back', 'etape3');
    }
    
    cancelForm = () => {
        this.props.cancelForm(false);
    }

    saveForm = () => {
        let url = "http://localhost:3001/restitutionFormulaire";

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                civilite: this.props.civilite,
                nom: this.props.nom,
                prenom: this.props.prenom,
                email: this.props.email,
                tel: this.props.tel,
                framework: this.props.framework
            })
        }
        fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.error(error));
    }


    render() {
        return(
            <div>
                <h2>Etape 3 !</h2>

                <div>
                    <p>Civilité : { this.props.civilite }</p>
                    <p>Nom : { this.props.nom }</p>
                    <p>Prénom : { this.props.prenom }</p>
                    <p>Email : { this.props.email }</p>
                    <p>N° tél : { this.props.tel }</p>
                    <p>Framework favoris : { this.props.framework }</p>
                </div>

                <button className="" onClick={this.backForm} >Retour</button>
                <button className="" onClick={this.cancelForm} >Annuler</button>
                <button className="" onClick={this.saveForm} >Enregistrer</button>
            </div>
        )
    }
}

export default Etape3;