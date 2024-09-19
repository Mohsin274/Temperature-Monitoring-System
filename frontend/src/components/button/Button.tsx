import "./Button.css";
import { ReactNode } from "react";
const Button = ({
    onClick,
    children,
    className,
    disabled = false,
    fullWidth = false,
    variant = "primary",
}: {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: "primary" | "secondary" | "tertiary";
}) => {
    return (
        <button
            className={`
                button
                ${className ?? ""}
                ${fullWidth ? "full-width" : ""}
                ${variant ?? ""}
                ${disabled ? "disabled" : ""}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
