import { LineChart } from '@mui/x-charts/LineChart';
import { chartData } from '../data';
import Header from '../components/Header';
import { useVariableStore } from '../variableStore';

export default function Dashboard() {
  const { showGdp, showInflation, startYear, endYear } = useVariableStore();

  const filteredData = chartData.filter(d => d.year >= startYear && d.year <= endYear
  );

  const years = filteredData.map(d => d.year)
  const gdpValues = filteredData.map(d => d.gdp)
  const inflationValues = filteredData.map(d => d.inflation)
  

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
          ...(showGdp ? [{ data: gdpValues, label: 'GDP Growth (%)', color: 'red' }] : []),
          ...(showInflation ? [{ data: inflationValues, label: 'Inflation (%)', color: 'blue' }] : []),
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
      </div>
    </div>
    </div>
    </>
  );
}
