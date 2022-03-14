import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';


class PokemonComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = { imageSource: this.getImageSource() }
    }

    styles = {
        boxShadow: "0 .25rem .75rem"
    };

    buttonStyle = {
        justifyContent: 'left'
    };


    getImageSource = () => {
        let randomNumber = Math.floor(Math.random() * (210 - 200) + 200);
        console.log("randomNumber", randomNumber);
        let imageSource = "https://picsum.photos/" + randomNumber;
        console.log(imageSource);

        return imageSource;
    }


    render() {
        return <div className="col-md-4">
            <div className="cad mb-4 box-shadow" style={this.styles}>
                <img src={this.state.imageSource} className="img-fluid" alt="Responsive image" />
                <div className="card-body">
                    <p className="card-text">Pokemon Name</p>
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