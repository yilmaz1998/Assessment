import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { LineChart } from '@mui/x-charts/LineChart';
import { chartData } from '../data';

export default function Dashboard() {
  const years = chartData.map(d => d.year)
  const gdpValues = chartData.map(d => d.gdp)
  const inflationValues = chartData.map(d => d.inflation)

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Welcome to the Dashboard</h1>
      <div>
        <LineChart
        height={400}
        width={800}
        xAxis={[{ data: years, label: 'Year' }]}
        series={[
          { data: gdpValues, label: 'GDP Growth (%)', color: 'blue' },
          { data: inflationValues, label: 'Inflation (%)', color: 'red' },
        ]}
        grid={{ vertical: true, horizontal: true }}
      />
      </div>
      <button
        onClick={handleLogout}
        className="btn btn-danger"
      >
        Logout
      </button>
    </div>
  );
}
