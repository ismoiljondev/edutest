import { ReactNode } from "react";
import style from "./style.module.scss";
interface buttonProps {
	children: ReactNode;
	color?: "blue" | "yellow";
}

const Button: React.FC<buttonProps> = (props: buttonProps) => {
	const { children, color } = props;

	return (
		<button className={style[`${color || "blue"}button`]}>
			{children}
		</button>
	);
};

export default Button;
