"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import failedTestsList from '@/data/failedTests';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const LineChart: React.FC = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data: ChartData<'line'> = {
    labels,
    datasets: failedTestsList
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,  
        },
      },
      title: {
        display: true,
        text: 'Performance Metrics Over Time',
      },
    },
    elements: {
      point: {
        pointStyle: 'circle',  
      },
    },
  };

  return (
    <div className="flex-[2.5] w-full h-full p-4 z-1">
      <h2 className="text-2xl font-bold">Failed tests</h2>
      <div className="aspect-square w-full h-[300px] relative">
        <Line className='static z-20' data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
