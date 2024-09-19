import { useState, useEffect, FC } from "react";
import axios from "axios";
import {
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";
import "./TemperatureGraph.css";
import CustomTooltip from "../tooltip/Toottip";
import Card from "../temperature-card/Card";
import { calculateStats } from "../../utils/temperatureUtils";
import { Temperature } from "../../types/temperature";

const TemperatureGraph: FC = () => {
    const [temperatures, setTemperatures] = useState<Temperature[]>([]);
    const [stats, setStats] = useState<{ max: number; min: number; avg: number }>(
        { max: 0, min: 0, avg: 0 }
    );

    const fetchData = async () => {
        try {
            const response = await axios.get<Temperature[]>(`${process.env.REACT_APP_API_URL}/v1/temperatures`);
            setTemperatures(response.data);
            setStats(calculateStats(response.data));
        } catch (error) {
            console.error("Error fetching temperature data:", error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 2000); // Fetch data every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="temperature-graph">
            <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={temperatures}>
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4239e7" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#4239e7" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="createdAt"
                        tickFormatter={(createdAt: string) =>
                            new Date(createdAt).toLocaleTimeString()
                        }
                        angle={-45}
                        textAnchor="end"
                        height={85}
                        dy={10}
                    />
                    <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4239e7"
                        fillOpacity={1}
                        fill="url(#gradient)"
                    />
                    <Line type="monotone" dataKey="value" stroke="#4239e7" dot={false} />
                </AreaChart>
            </ResponsiveContainer>
            <div className="card-flex">
                <Card temperature={stats.min} label="Minimum" />
                <Card temperature={stats.avg} label="Average" />
                <Card temperature={stats.max} label="Maximum" />
            </div>
        </div>
    );
};

export default TemperatureGraph;
