import React, { Component } from 'react';
import axios from 'axios';


class PokemonComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonInfo: null
        }
    }

    styles = {
        boxShadow: "0 .25rem .75rem"
    };

    buttonStyle = {
        justifyContent: 'right'
    };

    componentDidMount() {
        if (this.props.pokemon != null) {
            axios.get(this.props.pokemon.url).then(response => {
                this.setState({ pokemonInfo: response.data });
            });
        }
    }

    componentDidUpdate() {
        console.log("Pokemon component update");
    }

    getImageSource = () => {

        console.log("Pokemon", this.state.pokemonInfo);

        if (this.state.pokemonInfo == null) {
            return <img src="" className="img-fluid" alt="No Image" />
        }

        return <img src={this.state.pokemonInfo.sprites.front_default} className="img-fluid" alt="Responsive image" />;
    }

    render() {
        return <div className="col-md-4">
            <div className="cad mb-4 box-shadow" style={this.styles}>
                {this.getImageSource()}
                <div className="card-body">
                    <p className="card-text">{this.props.pokemon.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group justify-content-md-right" style={this.buttonStyle}>
                            <button type="button" className="btn btn-sm btn-outline-primary justify-content-md-end">View</button>
                        </div>
                    </div>
                </div>

            </div>

        </div >

    }
}

export default PokemonComponent;