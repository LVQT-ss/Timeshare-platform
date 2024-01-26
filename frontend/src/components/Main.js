import React, { Component } from 'react'
import { Location } from '../Share/Location'
import Presentation from './Presentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            location: Location
        };
    }
    render() {
        return <Presentation location={this.state.location} />
    }
}
export default Main
