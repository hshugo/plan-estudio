import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PlanNombre extends Component {
    render () {
        return (
            <h1 className="plan__nombre">
                {this.props.nombre}
            </h1>
        )
    }
}

PlanNombre.propTypes = {
    nombre: PropTypes.string.isRequired
};