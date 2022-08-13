import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Overview',
    },
  },
};

const labels = ['Data', 'Airtime', 'Cable tv', 'Electricity', 'Internet'];

export const data = {
  labels,

  datasets: [
    {
      data: [49, 80, 95, 27, 40],
      backgroundColor: [
        '#06b56d',
        'rgb(44, 44, 233)',
        'green',
        'rgb(91, 238, 91)',
        '#414077',
      ],
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
