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
            },
            {
                codigo: '1111',
                nombre: 'Probabilidad y Estadística',
                cuatrimestre: 1,
                correlativas: [1033],
                horas: 4
            },

            {
                codigo: '1112',
                nombre: 'Auditoría y Seguridad Informática',
                cuatrimestre: 1,
                correlativas: [1026,1109],
                horas: 4
            },
            {
                codigo: '1113',
                nombre: 'Programación Avanzada / Incluye TCP',
                cuatrimestre: 1,
                correlativas: [1113, 1023 , 1110],
                horas: 10
            },
            {
                codigo: '1114',
                nombre: 'Base de Datos',
                cuatrimestre: 1,
                correlativas: [1028,1033],
                horas: 6
            },
            {
                codigo: '1115',
                nombre: 'Sistemas Operativos',
                cuatrimestre: 1,
                correlativas: [1109 , 1110],
                horas: 8
            },
            {
                codigo: '1116',
                nombre: 'Análisis de Sistemas / Incluye TCP',
                cuatrimestre: 1,
                correlativas: [1028 , 1108],
                horas: 10
            },
            {
                codigo: '1117',
                nombre: 'Cálculo Numérico',
                cuatrimestre: 1,
                correlativas: [ 1032 , 1033],
                horas: 4
            },
            {
                codigo: '1118',
                nombre: 'Ingeniería de Requerimientos',
                cuatrimestre: 1,
                correlativas: [1116],
                horas: 4
            },
            {
                codigo: '1119',
                nombre: 'Comunicación de Datos',
                cuatrimestre: 1,
                correlativas: [1109 , 1115],
                horas: 4
            },
            {
                codigo: '1120',
                nombre: 'Diseño de Sistemas / Incluye TCP',
                cuatrimestre: 1,
                correlativas: [1116],
                horas: 10
            },
            {
                codigo: '1121',
                nombre: 'Análisis de Software',
                cuatrimestre: 1,
                correlativas: [ 1113],
                horas: 4
            },
            {
                codigo: '1122',
                nombre: 'Redes de Computadoras',
                cuatrimestre: 1,
                correlativas: [1031 , 1119],
                horas: 8
            },
            {
                codigo: '1123',
                nombre: 'Sistemas Operativos Avanzados',
                cuatrimestre: 1,
                correlativas: [1113 , 1115],
                horas: 4
            },
            {
                codigo: '1124',
                nombre: 'Lenguajes y Compiladores',
                cuatrimestre: 1,
                correlativas: [1110 , 1115],
                horas: 10
            },
            {
                codigo: '1125',
                nombre: 'Gestión Organizacional',
                cuatrimestre: 1,
                correlativas: [1026 , 1116],
                horas: 4
            },
            {
                codigo: '1126',
                nombre: 'Ingeniería de Software / Incluye TCP',
                cuatrimestre: 1,
                correlativas: [1025 , 1029 , 1035 , 1109 , 1111 , 1115 , 1117 , 1120],
                horas: 10
            },
            {
                codigo: '1127',
                nombre: 'Elementos de Inteligencia Artificial',
                cuatrimestre: 1,
                correlativas: [1029 , 1032 , 1035 , 1111 , 1123],
                horas: 4
            },
            {
                codigo: '1128',
                nombre: 'Electiva I',
                cuatrimestre: 1,
                correlativas: [1025 , 1029 , 1035 , 1111 , 1115 , 1117, 1122],
                horas: 4
            },
            {
                codigo: '1129',
                nombre: 'Autómatas y Lenguajes Formales',
                cuatrimestre: 1,
                correlativas: [1129 , 1025 , 1029 , 1035 , 1111 , 1117 , 1122],
                horas: 6
            },
            {
                codigo: '1130',
                nombre: 'Electiva II',
                cuatrimestre: 2,
                correlativas: [1025 , 1029 , 1035 , 1111 , 1115 , 1117 , 1122],
                horas: 4
            },
            {
                codigo: '1131',
                nombre: 'Electiva III',
                cuatrimestre: 2,
                correlativas: [1025 , 1029 , 1035 , 1111 , 1115 , 1117 , 1122],
                horas: 4
            },

            {
                codigo: '1132',
                nombre: 'Proyecto de fin de carrera',
                cuatrimestre: 2,
                correlativas: [1023 , 1024 , 1025 , 1026 , 1027 , 1028 , 1029, 1035 , 1108, 1109 , 1110 , 1111 , 1112 , 1113, 1114 , 1115 , 1116 , 1117 , 1118 , 1119 , 1120 , 1121 , 1122, 1123 , 1124 , 1025 , 1029 , 1035 , 1111 , 1115 , 1117 , 1122],
                horas: 4
            },
            {
                codigo: '1133',
                nombre: 'Práctica Profesional Supervisada',
                cuatrimestre: 2,
                correlativas: [1133 , 1118 , 1119 , 1120 , 1121 , 1125],
                horas: 12.5
            },

        ]
    };


    setTimeout(() => {
        callback(data);
    }, 1000);
}

/*
*
* Proyecto de fin de carrera Desde 1023 a 1033
            (inclusive) , 1035 y de
            1108 a 1125 (inclusive)
            */