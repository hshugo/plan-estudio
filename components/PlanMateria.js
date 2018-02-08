import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Correlativas from './Correlativas';
export default class PlanMateria extends Component {
    render () {
        const materia = this.props.materia;

        return (
            <div className="plan__materia">
                <h3>{materia.nombre} (cuatrimestre: {materia.cuatrimestre})</h3>
                <Correlativas codigos={materia.correlativas} />
            </div>
        )
    }
}

PlanMateria.propTypes = {
    materia: PropTypes.object.isRequired
};