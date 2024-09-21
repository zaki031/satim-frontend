"use client";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart: React.FC = () => {
  const data: ChartData<'doughnut'> = {
    labels: ['Accepted', 'Rejected'],
    datasets: [
      {
        data: [60, 40], 
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#45a049', '#da190b'],
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full   p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-left ">Acceptance Rate</h2>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <span className="text-gray-500">Succeeded</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 bg-[#E83038] rounded-full"></div>
          <span className="text-gray-500">Failed</span>
        </div>
      </div>

      <div className="flex justify-center items-center aspect-square h-[200px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
