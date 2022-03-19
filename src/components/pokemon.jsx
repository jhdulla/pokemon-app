import React, { Component } from 'react';
import PokemonComponent from './pokemonComponent';

class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemons: null
        }
    }



    render() {
        return <div><nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://picsum.photos/200" alt="" width="30" height="24" className="d-inline-block align-text-top" /> Pokemon
                </a>
            </div>
        </nav>
            <div className="container-fluid">
                <div className="row">
                    {this.props.pokemons != null && this.props.pokemons.results.map((result) => {

                        return < PokemonComponent key={result.name} pokemon={result} />;
                    })}

                </div>
            </div>
        </div>
    }







}

export default Pokemon;