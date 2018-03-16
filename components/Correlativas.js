import React, {Component} from 'react';
import Codigo from "./Codigo";

export default class Correlativas extends Component {

    constructor(){
        super();
    }
    render () {
        const codigos= this.props.codigos || [];
        console.log("los codigos:",codigos);
        return (
                codigos.map( codigo => <Codigo key={codigo} codigo={codigo}></Codigo>)
        )
    }
}