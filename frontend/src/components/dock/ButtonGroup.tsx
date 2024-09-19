import { faFileExport, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/Button";
import "./ButtonGroup.css";
const ButtonGroup = () => {
    return (
        <div className="btn-grp">
            <Button>
                <FontAwesomeIcon icon={faFileExport} /> Export CSV
            </Button>
            <Button variant="secondary">
                <FontAwesomeIcon icon={faPause} /> Pause
            </Button>
        </div>
    );
};

export default ButtonGroup;
