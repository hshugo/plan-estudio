import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import uuidv1 from "uuid";
import Correlativas from './Correlativas';
import { addMateria, delMateria } from "../actions/index";
import { Container, Row, Col } from 'react-grid-system';

/*
const mapDispatchToProps = dispatch => {

  return {
    addMateria: materia => dispatch(addMateria(materia))
  };
};
*/

const mapDispatchToProps = {
  addMateria,
  delMateria
}

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
      if( event.target.checked ){
        this.props.addMateria({ codigo });
      }else{
        this.props.delMateria({ codigo });
      }

    }
    render () {
        const materia = this.props.materia;
        return (
            <Container>
                <Row sm={6}>
                    <Col sm={2}><input type="checkbox" onChange={this.handleChange} value={materia.codigo}/>{materia.codigo}</Col>
                    <Col sm={6}>{materia.nombre} (cuatrimestre: {materia.cuatrimestre})</Col>
                    <Col sm={4}><Correlativas codigos={materia.correlativas} /></Col>
                </Row>
            </Container>
        )
    }
}

const PlanMateria = connect(null, mapDispatchToProps)(PlanMateria_);
export default PlanMateria;