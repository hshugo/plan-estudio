import React, {Component} from 'react';
import PlanMateria from "./PlanMateria";

export default class PlanMaterias extends Component {
    render () {
        const materias = this.props.materias || [];

        return (
            <div>
                {
                    materias.map(materia => <PlanMateria key={materia.nombre} materia={materia} />)
                }
            </div>
        )
    }
}
