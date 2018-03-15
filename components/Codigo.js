import React, {Component} from 'react';
import { connect } from "react-redux";
//import './bootstrap.min.css';
import css from '../style/style.scss';

//import 'style/style.scss';


const mapStateToProps = state => {
    console.log("NUEVAS: ", state);
  return { materias: state.materias };
};

class Codigo_ extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <span className={this.props.materias.filter(m=>m.codigo==this.props.codigo).length? 'active':'inactive'} >
                -{this.props.codigo}
            </span>

        )
    }
}


const Codigo = connect(mapStateToProps)(Codigo_);
export default Codigo;