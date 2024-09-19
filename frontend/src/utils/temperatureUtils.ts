import { Temperature } from "../types/temperature";

export const calculateStats = (temperatures: Temperature[]) => {
    if (temperatures.length === 0) {
        return { max: 0, min: 0, avg: 0 };
    }

    const values = temperatures.map(t => t.value);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const avg = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2); // round to 2 decimal places

    return { max, min, avg: parseFloat(avg) }; // convert avg back to number
};
