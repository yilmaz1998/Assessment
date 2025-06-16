import { LineChart } from '@mui/x-charts/LineChart';
import { chartData } from '../data';
import Header from '../components/Header';

export default function Dashboard() {
  const years = chartData.map(d => d.year)
  const gdpValues = chartData.map(d => d.gdp)
  const inflationValues = chartData.map(d => d.inflation)


  return (
    <>    
    <Header />
    <div className="h-screen flex flex-col justify-center items-center">
    <div className="w-full overflow-x-auto">
    <div className="min-w-[800px]">
       <LineChart
        width={800}
        height={400}
        xAxis={[{ data: years, label: 'Year' }]}
        series={[
          { data: gdpValues, label: 'GDP Growth (%)', color: 'blue' },
          { data: inflationValues, label: 'Inflation (%)', color: 'red' },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
      </div>
    </div>
    </div>
    </>
  );
}
