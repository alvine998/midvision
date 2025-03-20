import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import the chart to prevent SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

interface ChartProps {
  type: 'line' | 'bar' | 'pie' | 'donut' | 'area' | 'radar';
  options: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  height?: number;
}

const Chart = ({ type, options, series, height = 350 }: ChartProps) => {
  return (
    <div className="chart">
      <ReactApexChart options={options} series={series} type={type} height={height} />
    </div>
  );
};

export default Chart;