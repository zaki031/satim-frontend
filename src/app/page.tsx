import { TestReports } from "@/components/analytics/testReports";
import LineChart from "@/components/charts/lineChart";
import DonutChart from "@/components/charts/dougnut";
import Stats from "@/components/dashboard/stats";
import ProgressBarChart from "@/components/charts/loads";
export default function Home() {
  return (
    <div className="">
      <div className="flex h-[350px] gap-8 w-full">
        <div className="bg-white flex-1 h-[350px] rounded-[14px] mb-8">
          <DonutChart />
        </div>
        <Stats/>
      
      </div>
      <div className="w-full my-6 gap-8 flex">
       <div className="w-full bg-white rounded-[14px]"><LineChart/></div> 
       <div  className="w-full">

        <ProgressBarChart/>

       </div>
      </div>
    </div>
  );
}
