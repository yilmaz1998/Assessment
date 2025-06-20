import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts';
import { chartData } from '../data';
import Header from '../components/Header';
import { useVariableStore } from '../variableStore';

export default function Dashboard() {
  const { showGdp, showInflation, showInterestRate, showUnemployment, startYear, endYear } = useVariableStore();

  const filteredData = chartData.filter(d => d.year >= startYear && d.year <= endYear
  );

  const years = filteredData.map(d => d.year.toString())
  const gdpValues = filteredData.map(d => d.gdp)
  const inflationValues = filteredData.map(d => d.inflation)
  const unemploymentValues = filteredData.map(d => d.unemployment)
  const interestRateValues = filteredData.map(d => d.interestRate)

  const avg = (arr: number[]): number => {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  

  const avgGdp = avg(gdpValues).toFixed(2);
  const avgInflation = avg(inflationValues).toFixed(2);
  const avgUnemployment = avg(unemploymentValues).toFixed(2);
  const avgInterestRate = avg(interestRateValues).toFixed(2);
  

  return (
    <>    
    <Header />
    <div className="h-screen flex flex-col justify-center items-center">
      <p className='mb-5 text-2xl mt-3 px-2'><span className='font-bold'>Welcome,</span> This graph indicates GDP growth, inflation, unemployment, and interest rates over time.</p>

      <div className="flex flex-wrap justify-center gap-6 mb-6 w-full max-w-6xl">
          <div className="bg-white shadow-md rounded-md p-4 w-48 text-center">
            <p className="font-semibold mb-2 text-xl">Average GDP Growth</p>
            <p className="text-red-600 text-xl">{avgGdp}%</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 w-48 text-center">
            <p className="font-semibold mb-2 text-xl">Average Inflation Rate</p>
            <p className="text-blue-600 text-xl">{avgInflation}%</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 w-48 text-center">
            <p className="font-semibold mb-2 text-xl">Average Unemployment Rate</p>
            <p className="text-green-600 text-xl">{avgUnemployment}%</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4 w-48 text-center">
            <p className="font-semibold mb-2 text-xl">Average Interest Rate</p>
            <p className="text-purple-600 text-xl">{avgInterestRate}%</p>
          </div>
        </div>

    <div className="w-full lg:flex overflow-x-auto">
    <div className="w-1/2 min-w-[800px]">
      <h2 className='text-center mb-4'>Bar Chart</h2>
       <BarChart
        width={800}
        height={400}
        xAxis={[{ data: years, label: 'Year' }]}
        series={[
          ...(showGdp ? [{ data: gdpValues, label: 'GDP Growth (%)', color: 'red' }] : []),
          ...(showInflation ? [{ data: inflationValues, label: 'Inflation (%)', color: 'blue' }] : []),
          ...(showUnemployment ? [{ data: unemploymentValues, label: 'Unemployment Rate (%)', color: 'green' }] : []),
          ...(showInterestRate ? [{ data: interestRateValues, label: 'Interest Rate (%)', color: 'purple' }] : []),
        ]}
        grid={{ vertical: true, horizontal: true }}
        className='bg-white shadow-md rounded-md p-2'
      />
            </div>
    <div className="w-1/2 min-w-[800px]">
        <h2 className='text-center mb-4'>Line Chart</h2>
        <LineChart
        width={800}
        height={400}
        xAxis={[{ data: years, label: 'Year' }]}
        series={[
          ...(showGdp ? [{ data: gdpValues, label: 'GDP Growth (%)', color: 'red' }] : []),
          ...(showInflation ? [{ data: inflationValues, label: 'Inflation (%)', color: 'blue' }] : []),
          ...(showUnemployment ? [{ data: unemploymentValues, label: 'Unemployment Rate (%)', color: 'green' }] : []),
          ...(showInterestRate ? [{ data: interestRateValues, label: 'Interest Rate (%)', color: 'purple' }] : []),
        ]}
        grid={{ vertical: true, horizontal: true }}
        className='bg-white shadow-md rounded-md p-2'
      />
      </div>
    </div>
    </div>
    </>
  );
}
