import { FC } from "react";
import { TooltipProps } from "recharts";
import "./Tooltip.css";

type CustomTooltipProps = TooltipProps<number, string>;

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (active && payload?.length) {
        const temperature = payload[0].value;
        const timestamp = new Date(label).toLocaleString();

        return (
            <div className="tooltip">
                <p className="temp">{temperature}</p>
                <div className="info">
                    <p className="unit">°C</p>
                    <p className="timestamp">{timestamp}</p>
                </div>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
