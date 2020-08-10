import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export default class ChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example',
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#DFE0EB', '#FC3C8D'],
                xaxis: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                stroke: {
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: false
                },
            },
            series: [{
                name: 'Empresa X',
                data: [30, 40, 35, 50, 49, 20, 10, 30, 2]
            }, {
                name: 'Empresa Y',
                data: [11, 32, 45, 32, 34, 52, 41, 23, 25]
            }]
        }
    }
    render() {
        return (
            <div className="chart-container">
                <h2>Total de faturamento mensal</h2>
                <div className="header">
                    <span className="date">Julho 2020</span>
                    <div className="legend">
                        <span className="legend-item">Este mês</span>
                        <span className="legend-item">Mês passado</span>
                    </div>
                </div>
                <div className="chart">
                    <Chart options={this.state.options} series={this.state.series} type="area" height={380} />
                </div>
            </div>
        )
    }
}