import React, { Component } from 'react';
import PokemonComponent from './pokemonComponent';


class Pokemon extends React.Component {

    handleLoadPokemon = () => {

    }

    render() {
        return <div><nav classNames="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://picsum.photos/200" alt="" width="30" height="24" className="d-inline-block align-text-top" /> Pokemon
                </a>
            </div>
        </nav>
            <div className="container-fluid">
                <div className="row">
                    <PokemonComponent imageSource="https://picsum.photos/200" />
                    <PokemonComponent imageSource="https://picsum.photos/201" />
                    <PokemonComponent imageSource="https://picsum.photos/202" />
                    <PokemonComponent imageSource="https://picsum.photos/203" />
                    <PokemonComponent imageSource="https://picsum.photos/204" />
                    <PokemonComponent imageSource="https://picsum.photos/205" />
                </div>
            </div>
        </div>
            ;
    }




}

export default Pokemon;