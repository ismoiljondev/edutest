import React from "react";
import style from "./style.module.scss";
import { Button } from "..";
const Showcase: React.FC = () => {
	return (
		<div className={style.showcase}>
			<div className={style.showcase__text}>
				<p>BEST ONLINE EDUCATION SERVICE IN THE WORLD</p>
				<h2>ONE STEP AHEAD THIS SEASON</h2>
				<div className={style.showcase__text__btns}>
					<Button color="blue">LEARN MORE</Button>
					<Button color="yellow">SEE COURSE</Button>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
