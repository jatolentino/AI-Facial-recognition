import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';
//npm install --save chart.js@^2.7.3 react-chartjs-2@^2.7.4

class MyChart extends Component {
    constructor(props) {
        super();
        this.state = {
            data: {
                labels: props.thelabel,
                datasets: [
                    {
                        type: 'line',
                        label: 'API consumption',
                        data: props.thedata,
                        backgroundColor: 'rgba(189, 195, 199,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 1,
                        lineTension: 0,
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js',
                    },
                },
            },
        };
    }

    render() {
        return <Line data={this.state.data} options={this.state.options} />;
    }
}

export default MyChart;
