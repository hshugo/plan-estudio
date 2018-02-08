import React, {Component} from 'react';
import PlanNombre from "./PlanNombre";
import PlanMaterias from "./PlanMaterias";

export default class Plan extends Component {

    componentDidMount() {
        console.log('se cargo componente plan en DOM')
    }

    render () {
        const plan = this.props.plan;

        return (
            <div className="plan">
                <PlanNombre nombre={plan.nombre}/>
                <PlanMaterias materias={plan.materias}/>
            </div>
        )
    }

}
