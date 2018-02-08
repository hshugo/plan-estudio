import React, {Component} from 'react';
import PlanMateria from "./PlanMateria";

export default class PlanMaterias extends Component {
    render () {
        const materias = this.props.materias || [];

        return (
            <div>
                <h2>Materias del plan</h2>
                {
                    materias.map(materia => <PlanMateria key={materia.nombre} materia={materia} />)
                }
            </div>
        )
    }
}
