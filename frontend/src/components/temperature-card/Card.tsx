import "./Card.css";
const Card = ({
    temperature,
    label,
}: {
    temperature: number;
    label: string;
}) => {
    return (
        <div className="card">
            <p className="temp">{temperature}</p>
            <div>
                <p className="unit">°C</p>
                <p className="label">{label}</p>
            </div>
        </div>
    );
};

export default Card;
