import React, {Component} from 'react';
import Plan from '../components/Plan';
import PlanContainer from "./PlanContainer";

export default class App extends Component {
    render () {
        return (
            <PlanContainer id={1}/>
        );
    }
}