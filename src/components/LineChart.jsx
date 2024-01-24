import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
            type: 'category',
            // labels: labels,
        },
    },
};

const LineChart = () => {
    return (
        <div style={{ width: '500px', height: '250px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
