import React, {Component} from 'react';

export default class Codigo extends Component {

    constructor(){
        super();
    }
    render () {
        return (
            <span className="codigo_materia">
                {this.props.codigo}
            </span>
        )
    }
}