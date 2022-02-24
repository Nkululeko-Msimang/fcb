import React from "react";
import axios from 'axios';

export default class Calculator extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            values: [],
            calcResult: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({values: event.target.value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const valuesArr = this.state.values.split(',').map(function(item) {
            return parseInt(item, 10);
        });
        const url = 'http://localhost:3000/calculate';
        const result = await axios.post(url, {"values": valuesArr});
        this.setState({calcResult: (result.data)});
        localStorage.setItem('calcResult', JSON.stringify(result.data));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type='text' onChange={this.handleChange} ></input> <input type='submit' value='Submit'/>
                </label>
                <br />
                <label>Output: {JSON.stringify(this.state.calcResult)}</label>
            </form>
        )
    }
}
