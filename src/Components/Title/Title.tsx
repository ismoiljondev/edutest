import React from "react";
import style from "./style.module.scss";
type titleProps = {
	title: string;
	desc: string;
	color?: boolean;
};
const Title: React.FC<titleProps> = ({ title, desc, color }: titleProps) => {
	return (
		<div className={style.card}>
			<h2 className={`${style[`${color ? "white" : "title"}`]}`}>
				{title}
			</h2>
			<p>{desc}</p>
		</div>
	);
};

export default Title;
