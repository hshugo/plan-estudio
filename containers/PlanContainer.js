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
                correlativas: [],
                horas: 8
            },
            {
                codigo: '1024',
                nombre: 'Elementos de Programación',
                cuatrimestre: 1,
                correlativas: [],
                horas: 8
            },
            {   codigo: '1025',
                nombre: 'Sistemas de Representación',
                cuatrimestre: 1,
                correlativas: [],
                horas: 4
            },
            {
                codigo: '1026',
                nombre: 'Tecnología, Ingeniería y Sociedad',
                cuatrimestre: 1,
                correlativas: [],
                horas: 4
            },

            {   codigo: '1027',
                nombre: 'Álgebra y Geometría Analítica I',
                cuatrimestre: 1,
                correlativas: [],
                horas: 8
            },
            {
                codigo: '1028',
                nombre: 'Matemática Discreta',
                cuatrimestre: 1,
                correlativas: [],
                horas: 4
            },
            {   codigo: '1029',
                nombre: 'Química General',
                cuatrimestre: 1,
                correlativas: [],
                horas: 4
            },
            {
                codigo: '1030',
                nombre: 'Fundamentos de TIC\'s',
                cuatrimestre: 1,
                correlativas: [],
                horas: 8
            },

            {   codigo: '1031',
                nombre: 'Física I',
                cuatrimestre: 1,
                correlativas: [1023],
                horas: 8
            },
            {
                codigo: '1032',
                nombre: 'Álgebra y Geometría analítica II',
                cuatrimestre: 1,
                correlativas: [1027],
                horas: 4
            },
            {   codigo: '1033',
                nombre: 'Análisis Matemático II',
                cuatrimestre: 1,
                correlativas: [1023],
                horas: 8
            },
            {
                codigo: '1035',
                nombre: 'Física II',
                cuatrimestre: 1,
                correlativas: [1031],
                horas: 8
            },

            {   codigo: '1108',
                nombre: 'Requerimientos para la Ingeniería',
                cuatrimestre: 1,
                correlativas: [1030],
                horas: 4
            },
            {
                codigo: '1109',
                nombre: 'Arquitectura de Computadoras',
                cuatrimestre: 1,
                correlativas: [1028,1030],
                horas: 6
            },
            {   codigo: '1110',
                nombre: 'Programación / Incluye TCP',
                cuatrimestre: 1,
                correlativas: [1024,1028],
                horas: 10
            }
        ]
    };


    setTimeout(() => {
        callback(data);
    }, 1000);
}