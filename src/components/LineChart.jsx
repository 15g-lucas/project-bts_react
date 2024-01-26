import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const rawData = [
    {
        date: "23-01-2024 07:25:15",
        value: -0.002380952380952381,
    },
    {
        date: "23-01-2024 07:26:15",
        value: -0.002380952380952381,
    },
    // ... (ajoutez d'autres dates et valeurs si nécessaire)
    {
        date: "23-01-2024 08:45:09",
        value: -0.002380952380952381,
    }
];

// Vérification du format des dates
// const isValidDate = date => (date, "DD-MM-YYYY HH:mm:ss", true).isValid();

// Convertir les données brutes en un format compatible avec Chart.js
const formattedData = {
    labels: rawData.map(entry => entry.date),
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: rawData.map(entry => ({
                x: new Date(entry.date).getTime(),
                y: entry.value,
            })),
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
            type: 'linear',
            ticks: {
                stepSize: 1,
            },
        },
    },
};

const LineChart = () => {
    return (
        <div style={{ width: '500px', height: '250px' }}>
            <Line data={formattedData} options={options} />
        </div>
    );
};

export default LineChart;