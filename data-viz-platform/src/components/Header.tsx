import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { useVariableStore } from '../variableStore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    showGdp,
    showInflation,
    showInterestRate,
    showUnemployment,
    startYear,
    endYear,
    setShowGdp,
    setShowInflation,
    setShowInterestRate,
    setShowUnemployment,
    setStartYear,
    setEndYear,
  } = useVariableStore();


  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val <= endYear) setStartYear(val);
  };

  const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= startYear) setEndYear(val);
  };

  return (
    <header className="bg-gray-300 px-3 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Data Viz Platform</h1>
      <div className="flex items-center gap-4">
        <button onClick={toggleSideBar} className='btn btn-primary w-32'>Edit Variables</button>
        <button
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-58 lg:w-128 bg-gray-600 text-white transform transition-transform duration-800 ease-in-out z-10
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Edit Variables</h2>
          <button onClick={toggleSideBar} className="text-gray-300 hover:text-white">
            ✕
          </button>
        </div>
        <div className="p-4 space-y-6">
          <div>
            <h3 className="mb-4 font-semibold">Year Range</h3>
            <div className="flex items-center gap-3">
              <label>
                Start Year:
                <input
                  type="number"
                  value={startYear}
                  min={2015}
                  max={endYear}
                  onChange={handleStartYearChange}
                  className="rounded px-2 text-white w-20"
                />
              </label>
              <label>
                End Year:
                <input
                  type="number"
                  value={endYear}
                  min={startYear}
                  max={2025}
                  onChange={handleEndYearChange}
                  className="ml-2 rounded px-2 text-white w-20"
                />
              </label>
            </div>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showGdp}
                  onChange={(e) => setShowGdp(e.target.checked)}
                  sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                />
              }
              label="GDP Growth (%)"
            />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showInflation}
                  onChange={(e) => setShowInflation(e.target.checked)}
                  sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                />
              }
              label="Inflation (%)"
            />
          </div>


          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showUnemployment}
                  onChange={(e) => setShowUnemployment(e.target.checked)}
                  sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                />
              }
              label="Unemployment Rate (%)"
            />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showInterestRate}
                  onChange={(e) => setShowInterestRate(e.target.checked)}
                  sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }}
                />
              }
              label="Interest Rate (%)"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
