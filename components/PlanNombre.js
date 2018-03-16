import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
export default class PlanNombre extends Component {
    render () {
        return (
            <Container>
                <Row sm={12} className="plan__nombre">
                {this.props.nombre}
                </Row>
            </Container>
        )
    }
}

PlanNombre.propTypes = {
    nombre: PropTypes.string.isRequired
};