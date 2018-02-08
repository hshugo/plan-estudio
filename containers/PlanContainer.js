import React, {Component} from 'react';
import Plan from "../components/Plan";
import Loading from "../components/Loading";

export default class PlanContainer extends Component {

    constructor() {
        super();

        this.state = {
        }
    }

    componentWillMount() {
        fetchPlan(this.props.id, plan => {
            this.setState({
                plan
            });
        })
    }

    render () {
        if (!this.state.plan) {
            return <Loading/>;
        }

        return (
            <Plan plan={this.state.plan}/>
        )
    }
}

function fetchPlan(id, callback) {
    const data = {
        nombre: 'Ingeniería en Informática',
        materias: [
            {   codigo: '1023',
                nombre: 'Análisis Matemático I',
                cuatrimestre: 1,
                correlativas: [1,2,3],
                horas: 8
            },
            {
                codigo: '1024',
                nombre: 'Elementos de Programación',
                cuatrimestre: 1,
                correlativas: [4,5,6],
                horas: 8
            }
        ]
    };


    setTimeout(() => {
        callback(data);
    }, 3000);
}