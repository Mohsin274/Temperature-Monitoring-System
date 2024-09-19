import {
    faHome,
    faCog,
    faRightToBracket,
    faChartPie,
    faFileImport,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import Button from "../button/Button";

const Sidebar = () => {
    const items = [
        { id: 1, name: "Home", icon: faHome, link: "#" },
        { id: 2, name: "Dashboard", icon: faChartPie, link: "#" },
        { id: 3, name: "Settings", icon: faCog, link: "#" },
        { id: 4, name: "Import", icon: faFileImport, link: "#" },
    ];

    return (
        <div className="sidebar">
            <ul className="items">
                {items.map((item) => (
                    <li key={item.id} className="item">
                        <a href={item.link} className="link">
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <Button>
                <FontAwesomeIcon icon={faRightToBracket} /> Log in
            </Button>
        </div>
    );
};

export default Sidebar;
