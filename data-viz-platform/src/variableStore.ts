import { create } from 'zustand';

type VariableStore = {
    showGdp: boolean;
    showInflation: boolean;
    setShowGdp: (val: boolean) => void;
    setShowInflation: (val: boolean) => void;
    startYear: number;
    endYear: number;
    setStartYear: (val: number) => void;
    setEndYear: (val: number) => void;
    setYearRange: (start: number, end: number) => void;
  };
  
  export const useVariableStore = create<VariableStore>((set) => ({
    showGdp: true,
    showInflation: true,
    setShowGdp: (val) => set({ showGdp: val }),
    setShowInflation: (val) => set({ showInflation: val }),
    startYear: 2015,
    endYear: 2025,
    setStartYear: (val) => set((state) => ({ startYear: val > state.endYear ? state.endYear : val })),
    setEndYear: (val) => set((state) => ({ endYear: val < state.startYear ? state.startYear : val })),
    setYearRange: (start, end) => set({ startYear: start, endYear: end }),
  }));
  