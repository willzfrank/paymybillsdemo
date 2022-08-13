import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  legend: {
    display: false,
    position: 'right',
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

export const data = {
  labels: ['Data', 'Airtime', 'Cable tv', 'Electricity', 'Internet'],
  datasets: [
    {
      label: '# of Votes',
      data: [49, 80, 95, 27, 40],
      backgroundColor: [
        '#06b56d',
        'rgb(44, 44, 233)',
        'green',
        'rgb(91, 238, 91)',
        '#414077',
      ],

      borderColor: [
        '#06b56d',
        'rgb(44, 44, 233)',
        'green',
        'rgb(91, 238, 91)',
        '#414077',
      ],
      borderWidth: 1,
    },
  ],
};

const Piechart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Piechart;
