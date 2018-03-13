import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import uuidv1 from "uuid";
import Correlativas from './Correlativas';
import { addMateria } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addMateria: materia => dispatch(addMateria(materia))
  };
};

class PlanMateria_ extends Component {
    constructor() {
      super();
      this.state = {
        codigo: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.value]: event.target.value });
      const codigo =event.target.value;
      this.props.addMateria({ codigo });
    }
    render () {
        const materia = this.props.materia;

        return (
            <div className="plan__materia">
                <input type="checkbox" onChange={this.handleChange} value={materia.codigo}/>{materia.codigo}
                <h3>{materia.nombre} (cuatrimestre: {materia.cuatrimestre})</h3>
                <Correlativas codigos={materia.correlativas} />
            </div>
        )
    }
}

const PlanMateria = connect(null, mapDispatchToProps)(PlanMateria_);
export default PlanMateria;