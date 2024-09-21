import React from 'react';
import failedTestsList from '@/data/failedTests';

interface barType {
  label: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ label, percentage, color }: barType) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="h-4 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}  
        ></div>
      </div>
    </div>
  );
};

const ProgressBarChart = () => {
  const data = failedTestsList;

  return (
    <div className="flex-1 bg-white p-6 rounded-lg">
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.backgroundColor}  
        />
      ))}
    </div>
  );
};

export default ProgressBarChart;
